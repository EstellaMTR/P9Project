
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    courseCard: {
      featuredBackground: string;
      standardBackground: string;
      featuredText: string;
      standardText: string;
      xpBackground: string;
      xpText: string;
      progressBackground: string;
      progressBar: string;

      featuredWidth: string;
      inProgressWidth: string;
      recommendedWidth: string;
      featuredMinHeight: number;
      inProgressMinHeight: number;
      recommendedMinHeight: number;

      featuredPadding: number;
      inProgressPadding: number;
      recommendedPadding: number;
      cardGap: number;

      borderRadius: string;
      boxShadow: string;

      titleFontWeight: number;
      recommendedTitleFontSize: string;

      xpBorderRadius: string;
      xpPaddingX: number;
      xpPaddingY: number;
      xpFontSize: string;
      xpFontWeight: number;

      descriptionOpacity: number;

      progressHeight: number;
      progressBorderRadius: number;
      progressTextMarginTop: number;

      recommendedButtonWidth: string;
    };
  }

  interface PaletteOptions {
    courseCard?: Palette['courseCard'];
  }
}
