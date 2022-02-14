import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --shadow-color: 215deg 14% 37%;
    --shadow-elevation-low:
      0.3px 0.3px 0.4px hsl(var(--shadow-color) / 0.7),
      0.5px 0.5px 0.6px -2px hsl(var(--shadow-color) / 0.53),
      1.4px 1.5px 1.9px -3.9px hsl(var(--shadow-color) / 0.36);
    --shadow-elevation-medium:
      0.3px 0.3px 0.4px hsl(var(--shadow-color) / 0.59),
      0.6px 0.7px 0.8px -1px hsl(var(--shadow-color) / 0.5),
      1.5px 1.5px 1.9px -2px hsl(var(--shadow-color) / 0.42),
      3.4px 3.6px 4.5px -3px hsl(var(--shadow-color) / 0.33),
      7.2px 7.5px 9.4px -3.9px hsl(var(--shadow-color) / 0.24);
    --shadow-elevation-high:
      0.3px 0.3px 0.4px hsl(var(--shadow-color) / 0.55),
      1px 1px 1.3px -0.4px hsl(var(--shadow-color) / 0.51),
      1.9px 1.9px 2.4px -0.9px hsl(var(--shadow-color) / 0.47),
      3.2px 3.3px 4.2px -1.3px hsl(var(--shadow-color) / 0.43),
      5.4px 5.6px 7.1px -1.8px hsl(var(--shadow-color) / 0.39),
      8.8px 9.1px 11.5px -2.2px hsl(var(--shadow-color) / 0.35),
      13.7px 14.1px 17.8px -2.6px hsl(var(--shadow-color) / 0.31),
      20.4px 21px 26.6px -3.1px hsl(var(--shadow-color) / 0.27),
      29.3px 30.2px 38.2px -3.5px hsl(var(--shadow-color) / 0.23),
      40.6px 41.9px 52.9px -3.9px hsl(var(--shadow-color) / 0.19);
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    width: 100vw;
  }
`

const theme = {
  colors: {
    primary: '#001C55',
    secondary: '#0E6BA8',
  },
  background: {
    primary: '#00072D', // #7FA9D6
    form: '#fff' // #0F427D
  }
}

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
