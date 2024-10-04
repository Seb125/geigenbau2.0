import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Layout from "./components/Layout";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/Theme";
import Test from "./pages/TestPage";
import Handel from "./pages/Handel";
import Neubau from "./pages/Neubau";
import Mietinstrumente from "./pages/Mietinstrumente";
import Reparatur from "./pages/Reparatur";
import Kontakt from "./pages/Kontakt";
import "./index.css";
import './App.css';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/handel" element={<Handel />}  />
            <Route path="/neubau" element={<Neubau />}  />
            <Route path="/mietinstrumente" element={<Mietinstrumente/>} />
            <Route path="/reparatur" element={<Reparatur />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </Layout>
        
      </ThemeProvider>
    </>
  );
}

export default App;
