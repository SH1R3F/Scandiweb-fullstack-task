import {GRAPHQL_URI, HTTP_503_SERVICE_UNAVAILABLE} from './Config';

export const getGraphqlEndpoint = () => process.env.REACT_APP_BACKEND_URL.concat(GRAPHQL_URI);

export const postFetch = (graphQlURI, query, variables) => fetch(
    graphQlURI,
    {
        method: 'POST',
        body: JSON.stringify({ query, variables }),
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    },
);

export const formatURI = (variables, url) => {
    const stringifyVariables = Object.keys(variables).reduce(
        (acc, variable) => [...acc, `${ variable }=${ JSON.stringify(variables[variable]) }`],
        [],
    );

    return `${ url }?${ stringifyVariables.join('&') }`;
};

export const checkForErrors = (res) => new Promise((resolve, reject) => {
    const { errors, data } = res;

    if (errors) {
        reject(errors);
        return;
    }

    resolve(data);
});

export const parseResponse = async (response) => {
    try {
        const promiseResponse = await response;
        const data = await promiseResponse.json();

        return await checkForErrors(data);
    } catch (err) {
        console.error(err, 'Can not parse JSON!');

        throw err;
    }
};

export const executePost = async (queryObject) => {
    const { query, variables } = queryObject;

    try {
        const response = await postFetch(getGraphqlEndpoint(), query, variables);

        return await parseResponse(response);
    } catch (err) {
        console.error(err, 'executePost failed');
        throw err;
    }
};