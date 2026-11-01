import { Cormorant } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

export const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const theme = createTheme({
  palette: {
    primary: { main: '#6f7f6b' },       // muted sage
    text: { primary: '#3a3835', secondary: '#7a756d' },
    background: { default: '#faf7f2', paper: '#ffffff' },
    divider: '#d9d2c5',
  },
  typography: {
    fontFamily: cormorant.style.fontFamily,
    fontSize: 16,
    h1: { fontWeight: 300, fontSize: 'clamp(2.5rem, 7vw, 5rem)', lineHeight: 1.1, letterSpacing: '0.02em' },
    h2: { fontWeight: 400, fontSize: 'clamp(1.8rem, 4vw, 2.75rem)', lineHeight: 1.2 },
    h3: { fontWeight: 500, fontSize: '1.6rem', lineHeight: 1.3 },
    body1: { fontWeight: 500, fontSize: '1.25rem', lineHeight: 1.7 },
    overline: {
      fontWeight: 600,
      fontSize: '0.85rem',
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
      lineHeight: 2,
    },
    button: { fontWeight: 600, fontSize: '1rem', letterSpacing: '0.25em' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: '#faf7f2' },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '14px 56px',
          textTransform: 'uppercase',
          transition: 'all 0.3s ease',
          '&:hover': { backgroundColor: '#5b6a58' },
        },
      },
    },
  },
})

export default theme