import { createTheme, responsiveFontSizes } from "@material-ui/core";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
    },
    typography: {
      fontFamily: "Montserrat, sans-serif,Poppins",
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": [
            {
              fontFamily: "Montserrat, sans-serif,Poppins",
              fontStyle: "normal",
              fontDisplay: "swap",
              fontWeight: 400,
            },
          ],
        },
      },
    },
  })
);

export default theme;
