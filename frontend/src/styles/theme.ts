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
        // Course Card design system
    courseCard: {
      // Colors
      featuredBackground: '#041E42',
      standardBackground: '#FFFFFF',
      featuredText: '#FFFFFF',
      standardText: '#082044',
      xpBackground: '#FFB51B',
      xpText: '#082044',
      progressBackground: '#FFFFFF',
      progressBar: '#48D69B',

      // Card dimensions
      featuredWidth: '100%',
      inProgressWidth: '380px',
      recommendedWidth: '280px',
      featuredMinHeight: 185,
      inProgressMinHeight: 170,
      recommendedMinHeight: 160,

      // Card spacing
      featuredPadding: 3,
      inProgressPadding: 2,
      recommendedPadding: 1.5,
      cardGap: 1.5,

      // Card styling
      borderRadius: '18px',
      boxShadow: '0 3px 5px rgba(0,0,0,0.15)',

      // Title typography
      titleFontWeight: 700,
      recommendedTitleFontSize: '20px',

      // XP badge
      xpBorderRadius: '20px',
      xpPaddingX: 1.5,
      xpPaddingY: 0.5,
      xpFontSize: '12px',
      xpFontWeight: 700,

      // Description
      descriptionOpacity: 0.9,

      // Progress bar
      progressHeight: 10,
      progressBorderRadius: 10,
      progressTextMarginTop: 0.5,

      // Recommended button
      recommendedButtonWidth: '90%',
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
      styleOverrides: {
        root: {
          fontWeight: 700,
          textTransform: 'none', // Figma buttons aren't uppercased
        },
      },
    },
  },
})

export default theme