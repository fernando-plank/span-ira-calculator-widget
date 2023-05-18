import React from 'react';
import Incentives from '.';
export default {
    title: 'Incentives',
    component: Incentives
};
const incentives = [
    {
        item: '',
        program: '',
        filing_status: '',
        amount_type: '',
        amount: 0,
        end_date: 0,
        item_url: '',
        type: ''
    }
];
export const Default = () => React.createElement(Incentives, { incentives: incentives });
