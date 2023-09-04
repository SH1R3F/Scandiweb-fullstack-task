export class Field {

    name = '';
    children = [];
    args = [];

    constructor(name) {
        this.name = name;
    }

    addField(field) {
        this.children.push(new Field(field));
    }

    addFieldList(fieldList) {
        fieldList.forEach(this.addField.bind(this));

        return this;
    }

    addArgument(name, type, value) {
        this.args.push({
            name,
            type,
            value,
        });

        return this;
    }
}

export default Field;