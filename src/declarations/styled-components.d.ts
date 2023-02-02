import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      titles: string
      content: string
    }
    fontSizes: {
      normal: string
      medium: string
      big: string
    }
    colors: {
      primary: string
      secondary: string
      tertiary: string
      text: string
      background: string
      dark: string
    }
    fontWeights: {
      normal: string
      bold: string
    }
    borderRadius: string
  }
}
