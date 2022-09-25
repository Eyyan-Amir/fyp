import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0,
      xs: 320,
      sm: 575,
      md: 767,
      lg: 900,
      xl: 1200,
      xxl: 1536
    }
  },
  palette: {
    primary: {
      main: "#3C67FF",
      dark: "#19347D",
      light: "#6385FF",
      contrastText: "#fff"
    },
    secondary: {
      main: "#53E79C",
      dark: "#318A5D",
      light: "#75EBAF",
      contrastText: "#010810"
    },
    active: {
      active: "rgba(2, 19, 39, 0.54)",
      hover: "rgba(2, 19, 39, 0.04)",
      selected: "rgba(2, 19, 39, 0.08)",
      focus: "rgba(2, 19, 39, 0.12)",
      disabledBackground: "rgba(2, 19, 39, 0.12)",
      disabled: "rgba(2, 19, 39, 0.26)"
    },
    text: {
      primary: "rgba(1, 8, 16, 0.87)",
      secondary: "rgba(7, 13, 19, 0.7)",
      disabled: "rgba(7, 13, 19, 0.6)",
      dark: {
        primary: "#FFFFFF",
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)"
      }
    },
    error: {
      main: "#F44336",
      dark: "#D32F2F",
      light: "#E57373",
      alertText: "#611A15",
      contrastText: "#fff"
    },
    background: {
      paper: "#FFFFFF",
      default: "#F4F6FF"
    },
  },
  typography: {
    fontFamily: [
      "Rubik",
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: "76px"
    },
    h2: {
      fontSize: "60px"
    },
    h3: {
      fontSize: "48px"
    },
    h4: {
      fontSize: "34px"
    },
    h5: {
      fontSize: "24px"
    },
    h6: {
      fontSize: "20px"
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "16px"
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: "14px"
    },
    body1: {
      fontWeight: 400,
      fontSize: "16px"
    },
    body2: {
      fontWeight: 400,
      fontSize: "14px"
    },
    button: {
      fontWeight: 600,
      fontSize: "15px",
      textTransform: "uppercase"
    },
    caption: {
      fontWeight: 400,
      fontSize: "12px"
    },
  },
});
