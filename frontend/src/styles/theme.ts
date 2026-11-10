import { createTheme } from '@mui/material/styles';

/**
 * Central MUI theme for the app, generated from the Figma design system.
 * All components should pull colors, fonts and spacing from here instead
 * of hardcoding values.
 *
 * NOTE: Century Gothic is a commercial font. Until the team has licensed
 * font files to self-host via @font-face, this falls back to Poppins
 * (closest free geometric-sans match). Swap the @font-face block in
 * index.css once real font files are available.
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#ABCAF6', // light blue
      contrastText: '#041E42', // doubles as hover accent per design system)
    },
    secondary: {
      main: '#041E42', // dark blue
      light: '#2A3F68', // hover state color from the Button component
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#ABCAF6', // background color for the app
      paper: '#FFFFFF',
      inner: '#EEF5FB',   // inner light-blue background applied accross pages
    },
    // yellow style
    warning: {
      main: '#F8B322', // yellow, used for the yellow button variant
      contrastText: '#041E42',
    },
    success: {
      main: '#49D69D',
    },
    error: {
      main: '#E03E57',
    },
    // white style
    grey: {
      300: '#CDCFDD',
      50: '#FFFFFF',
    },
    text: {
      primary: '#282828', // "Black" in the design system
    },
  },
  typography: {
    fontFamily: ['Poppins', 'Century Gothic', 'sans-serif'].join(','),
    h1: { fontSize: '80px', fontWeight: 700 },
    h2: { fontSize: '64px', fontWeight: 700 },
    subtitle1: { fontSize: '48px', fontWeight: 700 },
    subtitle2: { fontSize: '32px', fontWeight: 400 },
    body1: { fontSize: '24px', fontWeight: 400 },
  },
  shape: {
    borderRadius: 20, // matches the rounded buttons in Figma
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          fontWeight: 700,
          textTransform: 'none',
          borderRadius: 20,
          padding: '12px 32px',
          fontSize: '18px',
        },
      },
    },
  },
});

export default theme;
