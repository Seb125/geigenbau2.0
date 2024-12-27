import Box from "@mui/material/Box";
import handel from "../assets/handel.jpg";
import main from "../assets/main.jpg";
import { Typography } from "@mui/material";
import ImageGallery from "../components/ImageGallery";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const imageData = [
  { src: handel, title: "Reapratur1" },
  { src: main, title: "Reapratur2" },
];

function Mietinstrumente() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      // Check when all images are loaded
      const promise = new Promise((resolve) => {
        const img = new Image();
        img.src = handel;
        img.onload = resolve;
        img.onerror = resolve; // Handle errors as well
      });

      promise.then(() => setLoading(false));
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {loading ? (
        <CircularProgress />
      ) : (
        <>
        <Menu />
          <Box
            sx={{
              position: "relative",
              width: "80%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={handel} className="subcategory-image" />
            <Box className="subcategory-label">
              <Typography
                className="header-text"
                variant="h3"
                fontFamily="Segoe UI Symbol"
                color="primary"
              >
                Mietinstrumente
              </Typography>
            </Box>
          </Box>
          <Box className="text-box">
            <Typography
              variant="h5"
              fontFamily="Segoe UI Symbol"
              color="secondary"
              align="center"
            >
              <p>
                Wir verleihen Geigen, Bratschen und Celli in allen Größen (1/16
                - 4/4) und Qualitäten.
              </p>

              <p>
                Die Instrumente werden in unserer Werkstatt optimal hergerichtet
                und spielfertig gemacht.
              </p>

              <p>Geige bis Größe 3/4 17.-€ incl. Versicherung</p>
              <p>Geige 4/4 17.-€ ohne Versicherung</p>
              <p>Cello ab 25.-€ ohne Versicherung</p>
              <p>
                bei einem späteren Instrumentenkauf werden bis zu 6 Monatsmieten
                angerechnet.
              </p>
            </Typography>
          </Box>
          <ImageGallery images={imageData} />
          <Footer />
        </>
      )}
    </Box>
  );
}

export default Mietinstrumente;
