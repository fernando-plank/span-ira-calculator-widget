import React from 'react'
import Icon from '@components/Icon'
import * as S from './styles'
import Menu from '@assets/img/menu.svg'
import ExplorePanel from '@assets/img/explore-panel.svg'

const Navbar = () => {
  return (
    <S.Wrapper>
      <S.MenuIconWrapper data-testid="navbar-menu">
        <Menu
          alt="menu"
          data-testid="menu-button"
          width={32}
          height={20}
        />
      </S.MenuIconWrapper>
      <S.NavbarLogo>
        <Icon icon="Logo" />
      </S.NavbarLogo>
      <S.ExplorePanelWrapper
        onClick={() => window.open('https://www.span.io/panel', '_self')}
      >
        <ExplorePanel
          data-testid="explore-panel-button"
          alt="explore-panel"
          width={149}
          height={24}
        />
      </S.ExplorePanelWrapper>
    </S.Wrapper>
  )
}

export default Navbar
