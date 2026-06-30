import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#8C7CF7",
    },

    background: {
      default: "#16161F",
      paper: "#1A1A24",
    },

    text: {
      primary: "#F5F5F7",
      secondary: "#8F90A6",
    },
  },

  typography: {
    fontFamily: "Inter, sans-serif",

    h5: {
      fontSize: "24px",
      fontWeight: 600,
    },

    body1: {
      fontSize: "14px",
      fontWeight: 400,
    },

    caption: {
      fontSize: "12px",
      fontWeight: 400,
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "none",
        },
      },
    },

    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default theme;