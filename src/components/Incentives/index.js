import React from 'react';
import { TAX_FILING } from '@services/types';
import { formatCurrency } from '@utils/currency';
import * as S from './styles';
const Incentives = ({ incentives }) => (React.createElement(S.Wrapper, null,
    React.createElement("h1", null, "Incentives"),
    React.createElement("br", null),
    React.createElement("div", null,
        React.createElement("table", null,
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "Incentive"),
                    React.createElement("th", null, "Description"),
                    React.createElement("th", null, "Tax Filing"),
                    React.createElement("th", null, "Amount"),
                    React.createElement("th", null, "Date"),
                    React.createElement("th", null, "Action"))),
            React.createElement("tbody", null, incentives.map((incentive, index) => {
                var _a;
                if (incentive.type === 'tax_credit') {
                    return (React.createElement("tr", { key: `${index}` },
                        React.createElement("td", null, incentive.item),
                        React.createElement("td", null, incentive.program),
                        React.createElement("td", null, (_a = TAX_FILING[incentive.filing_status]) !== null && _a !== void 0 ? _a : '-'),
                        React.createElement("td", null, incentive.amount_type === 'percent'
                            ? incentive.amount * 100 + '%'
                            : formatCurrency(incentive.amount)),
                        React.createElement("td", null, incentive.end_date),
                        React.createElement("td", null,
                            React.createElement("button", null,
                                React.createElement("a", { href: incentive.item_url }, "View")))));
                }
                return null;
            }))))));
export default Incentives;
