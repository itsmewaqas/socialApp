import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// import { responsiveFontSizes, createTheme } from "@mui/material";

const themeOptions = {
//   palette: {
//     primary: {
//       main: "#ff4400",
//     },
//     secondary: {
//       light: "#0066ff",
//       main: "#0044ff",
//       contrastText: "#ffcc00",
//     },
//     contrastThreshold: 3,
//     tonalOffset: 0.2,
//   },
};

let theme = responsiveFontSizes(createTheme(themeOptions));

export { theme };
