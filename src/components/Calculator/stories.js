import React from 'react';
import Calculator from '.';
export default {
    title: 'Calculator',
    component: Calculator
};
const functionFake = () => {
    return '';
};
export const Default = () => (React.createElement(Calculator, { onSubmitCallback: functionFake }));
