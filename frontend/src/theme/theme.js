import { createTheme } from "@mui/material";

const primary = "#18E1D9";
// const dark = "#0B0B15";
const dark = "#030C10"
const light = "white";



const theme  = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: {
      main: primary,
    },
    dark: {
      main: dark,
    },
    light: {
      main: light,
    },
  },
  components: {
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: "8px 24px 16px 24px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          textTransform: "none",
          color: dark,
          padding: "6px 24px",
        },
        outlined: {
          borderRadius: "35px",
          borderColor: dark,
          padding: "6px 20px",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        filled: {
          padding: "15px 0 15px 15px",
        },
      },
    },
    
  },
});

export default theme