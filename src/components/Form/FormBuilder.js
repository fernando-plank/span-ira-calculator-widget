class FormBuilder {
    constructor() {
        this.fields = [];
    }
    addField({ name, label, type, id, options, tooltip }) {
        this.fields.push({
            name,
            label,
            type,
            id,
            options,
            tooltip,
            required: false,
            value: ''
        });
        return this;
    }
    makeRequired() {
        const lastField = this.fields[this.fields.length - 1];
        if (lastField) {
            lastField.required = true;
        }
        return this;
    }
    build(submitCallback) {
        return {
            fields: this.fields,
            onSubmit: submitCallback
        };
    }
}
export default FormBuilder;
