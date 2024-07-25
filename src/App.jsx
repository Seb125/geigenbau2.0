import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Layout from "./components/Layout";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./components/Theme";

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
