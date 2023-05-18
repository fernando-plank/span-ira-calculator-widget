import React from 'react';
import Icon from '@components/Icon';
import * as S from './styles';
import Menu from '@assets/img/menu.svg';
import ExplorePanel from '@assets/img/explore-panel.svg';
const Navbar = () => {
    return (React.createElement(S.Wrapper, null,
        React.createElement(S.MenuIconWrapper, { "data-testid": "navbar-menu" },
            React.createElement(Menu, { alt: "menu", "data-testid": "menu-button", width: 32, height: 20 })),
        React.createElement(S.NavbarLogo, null,
            React.createElement(Icon, { icon: "Logo" })),
        React.createElement(S.ExplorePanelWrapper, { onClick: () => window.open('https://www.span.io/panel', '_self') },
            React.createElement(ExplorePanel, { "data-testid": "explore-panel-button", alt: "explore-panel", width: 149, height: 24 }))));
};
export default Navbar;
