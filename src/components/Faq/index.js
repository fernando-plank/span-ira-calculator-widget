import React from 'react';
import Accordion from '@components/Accordion';
import * as S from './styles';
const Faq = () => {
    const accordionStyle = { fontSize: '16px', lineHeight: 'normal' };
    return (React.createElement(S.Wrapper, null,
        React.createElement(S.Title, { "test-dataid": "faq-component-title" }, "Rebate FAQs"),
        React.createElement(Accordion, { style: accordionStyle, icon: 'Plus', title: "Will Enphase IQ  integrate with SPAN without SPAN Remote Meter?" },
            React.createElement(S.FaqBody, null, "All tax credits are available now. The rebates should start to become available by the end of 2023. We don`\u2018`t know exactly when the rebates marked \u201Clate 2023\u201D will be available, because it will depend on how each state rolls out its incentive program.")),
        React.createElement(Accordion, { style: accordionStyle, icon: 'Plus', title: "What is SPAN Remote Meter?", "data-testid": "accordion-span-remote-meter" },
            React.createElement(S.FaqBody, null, "In many cases, no! The IRA\u2019s incentives are designed to increase access to clean technology. For households with lower incomes, up to 100% of appliance and installation costs are discounted at purchase, meaning you could install efficient electric appliances at no cost, with no spending.Middle-income households do have to spend in order to access savings, but up to 50% of appliance and installation costs can be covered through upfront discounts, and you can use tax credits to cover some of the remaining gap. Highest-income households are not eligible for upfront discounts, so you will have to pay full price for appliances and installation \u2014 but tax credits on the back end could recoup up to 30% of your costs.")),
        React.createElement(Accordion, { style: accordionStyle, icon: 'Plus', title: "How does it work?" },
            React.createElement(S.FaqBody, null,
                React.createElement("p", null, "Yes! The IRA\u2019s up-front electrification rebates and electrification tax credits can all be used by renters. Many of these upgrades \u2014 including window-unit heat pumps (which should qualify by 2024/2025), electric stoves/cooktops, and heat pump clothes dryers \u2014 are portable, so renters can bring them to their next homes and won\u2019t have to leave any savings behind. Renters are also eligible for the used and new EV tax credits. And although they\u2019re not exactly consumer-facing, renters will benefit from the IRA\u2019s $1 billion investment in affordable housing energy upgrades and the new tax deduction for efficiency upgrades in commercial buildings (including apartment buildings). Renters can also subscribe to community solar \u2014 which will be cheaper because of the IRA\u2019s supply-side renewable energy incentives."))),
        React.createElement(Accordion, { style: accordionStyle, icon: 'Plus', title: "Where is the Remote Meter installed?" },
            React.createElement(S.FaqBody, null, "All tax credits were available starting January 1, 2023, so save your receipts for filing season! If you installed rooftop solar in 2022, it is eligible for the new, 30% 25D tax credit. If you installed a heat pump in 2022, it is eligible for the old 25C tax credit: 10% of costs up to $300. The Electrification Rebates and Efficiency Rebates will likely not be retroactive."))));
};
export default Faq;
