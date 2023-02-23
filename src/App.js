import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Nav from "./components/Nav";
import Components from "./pages/Components";
import Home from "./pages/Home";
import GlobalStyle from "./styles/GlobalStyles";
import theme from "./styles/theme";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
