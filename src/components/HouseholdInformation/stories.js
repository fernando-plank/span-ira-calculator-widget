import React from 'react';
import HouseholdInformation from '.';
export default {
    title: 'HouseholdInformation',
    component: HouseholdInformation
};
const mockFunction = (data) => {
    return data;
};
export const Default = () => (React.createElement(HouseholdInformation, { onSubmitCallback: mockFunction, info: {} }));
