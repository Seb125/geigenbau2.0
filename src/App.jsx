import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Layout from "./components/Layout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/Theme";
import Handel from "./pages/Handel";
import Neubau from "./pages/Neubau";
import Mietinstrumente from "./pages/Mietinstrumente";
import Reparatur from "./pages/Reparatur";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
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
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
          </Routes>
          </Layout>
        
      </ThemeProvider>
    </>
  );
}

export default App;
