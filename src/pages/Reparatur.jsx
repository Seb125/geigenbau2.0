import Box from "@mui/material/Box";
import reparatur1 from "../assets/reparatur1.jpeg";
import reparatur2 from "../assets/reparatur2.jpeg";
import { Typography } from "@mui/material";
import handel from "../assets/handel.jpg";
import ImageGallery from "../components/ImageGallery";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Footer from "../components/Footer";
import Menu from "../components/Menu";



const imageData = [
  { src: reparatur1, title: "Reapratur1" },
  { src: reparatur2, title: "Reapratur2" },
];

function Reparatur() {
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
                Reparatur
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
              In unserer Werkstatt werden alle gängigen Reparaturen und
              Restaurationen - Klangeinrichtungen sowie Bogenbehaarungen und
              Bogenreparaturen angeboten.
            </Typography>
          </Box>

          <ImageGallery images={imageData} />
          <Footer />
        </>
      )}
    </Box>
  );
}

export default Reparatur;
