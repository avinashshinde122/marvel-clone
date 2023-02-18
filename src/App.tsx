import { QueryClientProvider, QueryClient } from "react-query";
import Grid from "@mui/material/Grid";
import { styled, ThemeProvider } from "@mui/material/styles";
import Homepage from "./pages/homepage";
import useTheme from "./theme";

export const BodyGrid = styled(Grid)(({ theme }) => ({
  color: theme.palette.text.primary,
  background: theme.palette.primary.main,
  height: "100vh",
}));

const queryClient = new QueryClient();

function App() {
  const theme = useTheme("dark");
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BodyGrid>
          <Homepage />
        </BodyGrid>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
