import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./pages/Routes/router";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./contexts/DataContext";
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <DataProvider> 
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </DataProvider>
    </ThemeProvider>
  );
}
