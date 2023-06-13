import { colors } from './colors'
import { images } from './images'
import { fonts } from './typography'
import logoWhite from '@assets/img/span-logo-white.svg'
import logo from '@assets/img/span-logo-r.svg'
import bannerDesktop from '@assets/img/banner-span-ira-desktop.png'
import bannerMobile from '@assets/img/banner-span-ira-mobile.png'
export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  fonts,
  colors,
  images,
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  breakpoints: {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    mobileXL: '480px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1528px',
    desktop: '2560px'
  },
  banner: {
    mobile: bannerMobile,
    desktop: bannerDesktop
  },
  logoWhite,
  logo
} as const
