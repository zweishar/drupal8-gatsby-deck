const blue = '#5f37ff'
const lightGrey = '#323237'
const dartkGrey = '#29292e'
const white = '#f8f5f5'

export default {
  googleFont: 'https://fonts.googleapis.com/css?family=Roboto+Condensed',
  fonts: {
    body: '"Roboto Condensed", system-ui, sans-serif',
    monospace: '"Roboto Mono", monospace',
  },
  colors: {
    text: white,
    background: lightGrey,
    primary: blue,
    pre: blue,
    darkgray: dartkGrey,
  },
  fontWeights: {
    heading: 600,
    bold: 600,
  },
  text: {
    heading: {
      textTransform: 'none',
    },
  },
  styles: {
    pre: {
      color: 'primary',
      bg: 'darkgray',
    },
    code: {
      color: 'primary',
    },
    h1: {
      textAlign: 'center',
      fontSize: '1.5em',
    },
    h2: {
      textAlign: 'center',
      fontSize: '1em',
    },
    h3: {
      textAlign: 'center',
      fontSize: '.75em',
    },
    iframe: {
      width: '100% !important',
      margin: '0 auto !important',
      display: 'block !important',
    },
  },
}
