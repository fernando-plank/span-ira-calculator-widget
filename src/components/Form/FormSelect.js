import React from 'react';
import Info from '@components/Info';
import * as S from './styles';
export const FormSelect = ({ field, register, errors }) => {
    var _a;
    return (React.createElement(React.Fragment, null,
        React.createElement(S.FormInputLabel, null,
            field.label,
            field.required ? ' *' : '',
            React.createElement(Info, { text: field.tooltip })),
        React.createElement(S.FormSelectWrapper, null,
            React.createElement(S.FormSelect, Object.assign({}, register, { "data-testid": field.id }),
                React.createElement("option", { value: "", disabled: true, hidden: true }, field.label), (_a = field.options) === null || _a === void 0 ? void 0 :
                _a.map((option) => {
                    return (React.createElement("option", { key: option.value, value: option.value }, option.label));
                }))),
        errors[field.id] && (React.createElement(S.FormFieldError, { "data-testid": `${field.id}-error` }, "This field is required"))));
};
export default FormSelect;
