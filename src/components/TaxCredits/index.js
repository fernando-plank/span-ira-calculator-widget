import React from 'react';
import { formatCurrency } from '@utils/currency';
import { formatPercent, isInt } from '@utils/number';
import { useTheme } from 'styled-components';
import * as S from './styles';
const TaxCredits = ({ tableData }) => {
    const theme = useTheme();
    console.log(tableData);
    return (React.createElement(S.Wrapper, null,
        React.createElement(S.Title, { "data-testid": "tax-credits-title" }, "Tax credits"),
        React.createElement(S.TaxBody, null,
            React.createElement(S.TaxBodyContent, null,
                React.createElement(S.TaxText, null, "Disclaimer: These values are estimates. The rebates may be implemented differently in each state, so we cannot guarantee final amounts, eligibility, or timeline. And without additional appropriations from Congress, the rebate programs will end once their initial IRA funding is exhausted. Tax credits can only be used to offset your federal taxes owed, which we estimate but do not know.")),
            React.createElement(S.TaxBodyContent, null,
                React.createElement("table", { style: { width: '100%', textAlign: 'left', marginBottom: '60px' } },
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement(S.TableTh, null, "ITEM"),
                            React.createElement(S.TableTh, null, "AMOUNT"))),
                    React.createElement("tbody", null, tableData && (tableData === null || tableData === void 0 ? void 0 : tableData.map((item, index) => (React.createElement("tr", { key: index },
                        React.createElement(S.TableTd, { style: {
                                color: item.lineColor
                                    ? `${item.lineColor}`
                                    : `${theme.colors.black}`
                            } }, item.item),
                        React.createElement(S.TableTd, { style: {
                                color: item.lineColor
                                    ? `${item.lineColor}`
                                    : `${theme.colors.black}`
                            } }, isInt(item.amount)
                            ? formatCurrency(item.amount)
                            : formatPercent(item.amount))))))))))));
};
export default TaxCredits;
