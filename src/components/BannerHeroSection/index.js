import React from 'react';
import Icon from '@components/Icon';
import * as S from './styles';
export const BannerHeroSection = () => (React.createElement(S.Wrapper, null,
    React.createElement(S.Title, null, "Calculate your SPAN savings"),
    React.createElement(S.DescriptionWrapper, null,
        React.createElement(Icon, { icon: "House" }),
        React.createElement(S.Description, { "data-testid": "description" }, "The Inflation Reduction Act provides savings for SPAN Panel and greater electrification projects around your home. Find out your personalized savings below."))));
export default BannerHeroSection;
