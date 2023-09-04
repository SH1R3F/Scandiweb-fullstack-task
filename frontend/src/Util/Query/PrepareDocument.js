import { FieldType } from './Query.type';

export const prepareFieldString = (rootField, accArgs = {}) => {
    const {
        name, args, children,
    } = rootField;

    const resolvedArgs = args.reduce((acc, arg) => {
        if (!accArgs[arg.name]) {
            accArgs[arg.name] = [];
        }

        // add type and value of the argument into argument accumulator,
        // we will need this value when building the query doc and variables
        const index = accArgs[arg.name].push([arg.type, arg.value]);

        // join each argument as "name:$var_1"
        return [...acc, `${arg.name}:$${arg.name}_${index}`];
    }, []);

    // join arguments, wrap into "()" and join with ","
    const formattedArgs = resolvedArgs.length ? `(${resolvedArgs.join(',')})` : '';

    // join child fields with ","
    const formattedChildren = children.map((field) => prepareFieldString(field, accArgs)).join(',');

    // wrap body with "{}"
    const body = children.length ? `{${formattedChildren}}` : '';

    // format like "name(arg: $var){field1,field2}"
    return `${name}${formattedArgs}${body}`;
};

export const prepareRequest = (fields, type) => {
    const fieldsArray = Array.isArray(fields) ? fields : [fields];

    if (type !== FieldType.MUTATION && type !== FieldType.QUERY) {
        // we only support Mutation and Query types
        throw new Error(`GraphQL document type "${type}" is not supported.`);
    }

    const variables = {};
    const accArgs = {};

    // prepare fields from each field passed
    const fieldStrings = fieldsArray.map((field) => prepareFieldString(field, accArgs)).join(',');

    // go through argument accumulator collected in "prepareFieldString", join values
    // into the format "$var:Type" and append variable value to variables field
    const resolvedArgs = Object.entries(accArgs).reduce((acc, [name, dataArray]) => {
        dataArray.forEach(([type, value], i) => {
            const variable = `${name}_${i + 1}`;

            acc.push(`$${variable}:${type}`);
            variables[variable] = value;
        });

        return acc;
    }, []);

    // Wrap arguments with "()" and join using ","
    const formattedArgs = resolvedArgs.length ? `(${resolvedArgs.join(',')})` : '';

    if (process.env.NODE_ENV === 'development') {
        console.log(
            '%cGraphQL Request',
            'background-color: #ff00ff; color: #ffffff; font-weight: bold; border-radius: 5px; padding: 2px 5px',
            {
                query: `${type}${formattedArgs}{${fieldStrings}}`,
                variables,
            },
        );
    }

    return {
        // format like "query($var_1:String){test(arg: $var_1){id}}"
        query: `${type}${formattedArgs}{${fieldStrings}}`,
        variables,
    };
};


export const prepareQuery = (queries) => prepareRequest(queries, FieldType.QUERY);
