import type { DefaultTheme } from 'styled-components'

const appTheme: DefaultTheme = {
  fonts: {
    titles: 'Kanit, Helvetica, sans-serif',
    content: 'Ropa Sans, Arial, sans-serif',
  },
  fontSizes: {
    normal: '1rem',
    medium: '1.5rem',
    big: '2rem',
  },
  colors: {
    primary: '#e42f18',
    secondary: '#b8b8b8',
    tertiary: 'gold',
    background: '#242424',
    dark: '#0c0c0d',
    text: '#ffffff',
  },
  fontWeights: {
    normal: '400',
    bold: '600',
  },
  borderRadius: '10px',
}

export default appTheme
