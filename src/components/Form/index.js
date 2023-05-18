import React from 'react';
import { useForm } from 'react-hook-form';
import FormField from '@components/Form/FormField';
import FormSelect from '@components/Form/FormSelect';
import * as S from './styles';
export const Form = (props) => {
    const { fields, onSubmit } = props;
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (React.createElement(React.Fragment, null,
        React.createElement(S.Form, { onSubmit: handleSubmit(onSubmit), "data-testid": "form-element" },
            fields.map((field) => {
                if (field.type === 'select') {
                    return (React.createElement(S.FormInputGroup, { key: field.name },
                        React.createElement(FormSelect, { errors: errors, field: field, register: register(field.id, Object.assign({}, field)) })));
                }
                return (React.createElement(S.FormInputGroup, { key: field.name },
                    React.createElement(FormField, { errors: errors, field: field, register: register(field.id, Object.assign({}, field)) })));
            }),
            React.createElement(S.FormButtonGroup, null,
                React.createElement(S.CalculateButton, { "data-testid": "form-submit", type: "submit" }, "Calculate")))));
};
export default Form;
