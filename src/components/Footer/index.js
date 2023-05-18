import React from 'react';
import Icon from '@components/Icon';
import SocialMedia from '@components/SocialMedia';
import { socialMedias } from '@components/SocialMedia/constants';
import * as S from './styles';
const Footer = () => (React.createElement(S.Wrapper, null,
    React.createElement(Icon, { icon: "Logo" }),
    React.createElement(S.FooterContainer, null,
        React.createElement(S.LinksWrapper, null,
            React.createElement(S.LinksContainer, null,
                React.createElement(S.Link, { href: "https://www.span.io/", target: "_blank" }, "Home"),
                React.createElement(S.Link, { href: "https://www.span.io/panel", target: "_blank" }, "Panel"),
                React.createElement(S.Link, { href: "https://www.span.io/drive", target: "_blank" }, "Drive"),
                React.createElement(S.Link, { href: "https://www.span.io/app", target: "_blank" }, "App"),
                React.createElement(S.Link, { href: "https://www.span.io/partners", target: "_blank" }, "Installers & Partners"),
                React.createElement(S.Link, { href: "https://www.span.io/mission-careers", target: "_blank" }, "Mission & Careers"),
                React.createElement(S.Link, { href: "https://www.span.io/news", target: "_blank" }, "News")),
            React.createElement(S.LinksContainer, null,
                React.createElement(S.Link, { href: "https://www.span.io/tech-portal", target: "_blank" }, "Tech Portal"),
                React.createElement(S.Link, { href: "https://support.span.io/hc/en-us/", target: "_blank" }, "Support"),
                React.createElement(S.Link, { href: "https://www.span.io/terms-of-service", target: "_blank" }, "Terms of Service"),
                React.createElement(S.Link, { href: "https://www.span.io/privacy", target: "_blank" }, "Privacy Policy"),
                React.createElement(S.Link, { href: "https://www.span.io/legal", target: "_blank" }, "Legal"))),
        React.createElement(S.SocialMediaWrapper, null, socialMedias.map((socialMedia, index) => (React.createElement(SocialMedia, { key: index, icon: socialMedia.icon, url: socialMedia.url }))))),
    React.createElement(S.RightsText, null, "\u00A92023 SPAN.io, Inc. All rights reserved.")));
export default Footer;
