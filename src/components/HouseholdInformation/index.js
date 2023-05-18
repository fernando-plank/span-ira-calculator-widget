import React from 'react';
import Calculator from '@components/Calculator';
import * as S from './styles';
const HouseholdInformation = ({ onSubmitCallback, info }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Calculator, { onSubmitCallback: onSubmitCallback }),
        (info === null || info === void 0 ? void 0 : info.message) && (React.createElement(S.HouseholdInformationMessage, null,
            "Error: ",
            info.message))));
};
export default HouseholdInformation;
