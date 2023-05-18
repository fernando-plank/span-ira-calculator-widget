import React from 'react';
import Icon from '@components/Icon';
import Info from '@components/Info';
import { formatCurrency } from '@utils/currency';
import * as S from './styles';
const PersonalizedIncentives = ({ householdInformation }) => (React.createElement(S.Wrapper, null,
    React.createElement(S.Title, null, "Your personalized incentives"),
    React.createElement(S.IncentivesBody, null,
        React.createElement(S.IncentivesBodyIcon, null,
            React.createElement(Icon, { icon: 'Lightning' }),
            React.createElement(Icon, { icon: 'Lightning' }),
            React.createElement(Icon, { icon: 'Lightning' })),
        React.createElement("div", null,
            React.createElement(S.DescriptionWrapper, null,
                React.createElement(S.DescriptionContainer, null,
                    React.createElement(S.Subtitle, null,
                        "Available tax credits",
                        React.createElement(Info, { text: 'The geothermal tax credit is not included in this total.' })),
                    React.createElement(S.Price, { "data-testid": "household_tax_savings" }, formatCurrency(householdInformation === null || householdInformation === void 0 ? void 0 : householdInformation.tax_savings))),
                React.createElement(S.DescriptionContainer, null,
                    React.createElement(S.Subtitle, null,
                        "Estimated energy savings per year",
                        React.createElement(Info, { text: `This estimate is based on energy costs in your state. 
                It includes savings on both utility and gasoline bills if you switch to an 
                electric vehicle and a heat pump for space and water heating.` })),
                    React.createElement(S.Price, { "data-testid": "household_annual_savings" }, formatCurrency(householdInformation === null || householdInformation === void 0 ? void 0 : householdInformation.estimated_annual_savings)))),
            React.createElement(S.Total, null, "Total Incentives"),
            React.createElement(S.TotalPrice, { "data-testid": "household_total_savings" }, formatCurrency((householdInformation === null || householdInformation === void 0 ? void 0 : householdInformation.tax_savings) +
                (householdInformation === null || householdInformation === void 0 ? void 0 : householdInformation.pos_savings))))),
    React.createElement(S.Separator, null),
    React.createElement(S.IncentivesFooter, null,
        React.createElement(S.IncentivesFooterContent, null, "Disclaimer: These values are estimates. The rebates may be implemented differently in each state, so we cannot guarantee final amounts, eligibility, or timeline. And without additional appropriations from Congress, the rebate programs will end once their initial IRA funding is exhausted. Tax credits can only be used to offset your federal taxes owed, which we estimate but do not know."),
        React.createElement(S.IncentivesFooterContent, null, "Your income is above the threshold for upfront discounts and/or EV tax credits, but your tax liability will likely qualify you for equipment tax credits. You do qualify for a performance-based efficiency rebate worth $4,000. However, we do not consider this an upfront discount. Check out this relevant case study!"))));
export default PersonalizedIncentives;
