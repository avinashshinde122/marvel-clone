import { blueGrey, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const useTheme = (mode: string) => {
  const theme = createTheme({
    palette: {
      ...(mode === "light"
        ? {
            primary: {
              //   light: "0aaf54",
              main: "#9A8C98",
              //   dark: "#0d6932",
              // contrastText: will be calculated to contrast with palette.primary.main
            },
            secondary: {
              light: "#469dcd",
              main: "#3f8ab3",
              dark: "2f607b",
              // contrastText: "#ffcc00",
            },
            background: {
              default: "#F2E9E4",
              paper: "#ffffff",
            },

            text: {
              primary: "#FFFFFF",
              secondary: "#FFFFFF",
              disabled: "#FFFFFF",
            },

            // Used by `getContrastText()` to maximize the contrast between
            // the background and the text.
            contrastThreshold: 3,
            // Used by the functions below to shift a color's luminance by approximately
            // two indexes within its tonal palette.
            // E.g., shift from Red 500 to Red 300 or Red 700.
            tonalOffset: 0.2,
          }
        : {
            primary: {
              main: "#423e3e",
              dark: "#333030",
            },
            secondary: {
              light: "#469dcd",
              main: "#3f8ab3",
              dark: "#2f607b",
            },
            divider: blueGrey[700],
            background: {
              default: blueGrey[800],
              paper: blueGrey[900],
            },
            text: {
              primary: "#fff",
              secondary: grey[500],
            },
          }),
    },
    spacing: 8,
    typography: {
      fontFamily: "Raleway, Arial",
      h4:
        mode === "light"
          ? {
              color: "#000",
            }
          : { color: "#fff" },
    },
  });
  return theme;
};

export default useTheme;
