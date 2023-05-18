import React from 'react';
import PersonalizedIncentives from '.';
export default {
    title: 'PersonalizedIncentives',
    component: PersonalizedIncentives
};
export const Default = () => (React.createElement(PersonalizedIncentives, { householdInformation: {
        estimated_annual_savings: 0,
        tax_savings: 0,
        pos_savings: 0
    } }));
