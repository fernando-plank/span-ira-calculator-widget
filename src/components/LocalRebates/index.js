import React from 'react';
import Accordion from '@components/Accordion';
import * as S from './styles';
const LocalRebates = () => {
    return (React.createElement(S.Wrapper, null,
        React.createElement("div", null,
            React.createElement(S.Title, { "data-testid": "local-rebates-title" }, "Local utility electrification rebates")),
        React.createElement("div", null,
            React.createElement(Accordion, { icon: 'Plus', title: 'California' },
                React.createElement(S.BodyWrapper, null),
                React.createElement(S.BodyWrapper, null,
                    React.createElement(S.BodyContent, null,
                        React.createElement(S.BodyText, null,
                            React.createElement("b", null, "Silicon Valley Power"),
                            " customers can save up to $2,500 on SPAN as part of a larger home electrification project."),
                        React.createElement(S.LearnMoreButton, null, "Learn more")),
                    React.createElement(S.BodyContent, null,
                        React.createElement(S.BodyText, null,
                            React.createElement("b", null, "Sacramento Municipal Utility District"),
                            " (SMUD) customers can save up to $2,500 as part of a larger home electrification project."),
                        React.createElement(S.LearnMoreButton, null, "Learn more")))),
            React.createElement(Accordion, { icon: 'Plus', title: 'Hawai’i' },
                React.createElement(S.BodyWrapper, null),
                React.createElement(S.BodyWrapper, null,
                    React.createElement(S.BodyContent, null,
                        React.createElement(S.BodyText, null,
                            React.createElement("b", null, "Shifted Energy"),
                            " customers can have the costs of SPAN Panel covered, plus up to $4,000 for install when they agree to share SPAN Panel data and control with Shifted Energy."),
                        React.createElement(S.LearnMoreButton, null, "Learn more")),
                    React.createElement(S.BodyContent, null,
                        React.createElement(S.BodyText, null,
                            React.createElement("b", null, "Hawaiian Electric"),
                            " customers can save $500 on SPAN Panel product costs by becoming a HECO Utility rate payer."),
                        React.createElement(S.LearnMoreButton, null, "Learn more"))))),
        React.createElement("div", null,
            React.createElement(S.TextFooter, null, "We\u2019re constantly updating this list, so check back to see if your utility provider provides localized incentives for getting SPAN."))));
};
export default LocalRebates;
