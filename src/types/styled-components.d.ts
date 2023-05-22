import theme from 'styles/theme'

// inferência de tipos
type Theme = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {
    banner: {
      mobile: string
      desktop: string
    }
    layers: {
      base: number
      menu: number
      overlay: number
      modal: number
      alwaysOnTop: number
    }
    breakpoints: {
      mobileS: string
      mobileM: string
      mobileL: string
      tablet: string
      laptop: string
      laptopL: string
      desktop: string
    }
    fonts: {
      primary: {
        family: string
        light: number
        normal: number
        bold: number
        sizes: {
          xsmall: string
          small: string
          medium: string
          large: string
          xlarge: string
          xxlarge: string
        }
      }
    }
    colors: {
      primary: string
      secondary: string
      mainBg: string
      lightBg: string
      white: string
      black: string
      lightGray: string
      gray: string
      darkGray: string
    }
    spacings: {
      xxsmall: string
      xsmall: string
      small: string
      medium: string
      large: string
      xlarge: string
      xxlarge: string
    }
    logoWhite: string
    logo: string
  }
}
