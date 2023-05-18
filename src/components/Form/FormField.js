import React from 'react';
import Info from '@components/Info';
import * as S from './styles';
export const FormField = ({ field, register, errors }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(S.FormInputLabel, null,
            field.label,
            field.required ? ' *' : '',
            React.createElement(Info, { text: field.tooltip })),
        React.createElement(S.FormInput, Object.assign({ placeholder: field.label, "data-testid": field.id }, register)),
        errors[field.id] && (React.createElement(S.FormFieldError, { "data-testid": `${field.id}-error` }, "* This field is required"))));
};
export default FormField;
