import React from 'react';
import * as S from './styles';
const BannerGetQuote = () => (React.createElement(S.Wrapper, null,
    React.createElement(S.BannerContent, null,
        React.createElement(S.BannerTextWrapper, null,
            React.createElement(S.BannerTitle, null, "Ready"),
            React.createElement(S.BannerTitle, null, "for SPAN?"),
            React.createElement(S.BannerDescription, null, "Complete our easy form and one of our Home Advisors will be in touch to discuss your project scope, and the savings available.")),
        React.createElement(S.ButtonWrapper, null,
            React.createElement(S.GetQuoteButton, null, "Get quote"),
            React.createElement(S.ExplorePanelButton, { onClick: () => window.open('https://www.span.io/panel', '_self') }, "Explore panel")))));
export default BannerGetQuote;
