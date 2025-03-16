import { Header } from "./components/Header";
import { ThemeProvider } from "styled-components";
import { light } from "./style/themes/light";
// import { dark } from "./style/themes/dark";
import GlobalStyle from "./style/GlobalStyle";
import { LivroForm } from "./components/LivroForm";

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Header />
        <LivroForm />
      </ThemeProvider>
    </>
  );
}

export default App;
