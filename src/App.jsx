import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Layout from "./components/Layout";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/Theme";
import Test from "./pages/TestPage";
import "./index.css";


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </Layout>
        
      </ThemeProvider>
    </>
  );
}

export default App;
