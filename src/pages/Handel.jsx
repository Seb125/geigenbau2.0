import Box from "@mui/material/Box";
import header from "../assets/header.webp";
import { Typography } from "@mui/material";
import ImageCarousel from "../components/Carousel";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Menu from "../components/Menu";

function Handel() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      // Check when all images are loaded
      const promise = new Promise((resolve) => {
        const img = new Image();
        img.src = header;
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
        <Box height="100vh"/>
      ) : (
        <>
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
            <img src={header} className="subcategory-image" />
            <Box className="subcategory-label">
              <Typography
                className="header-text"
                variant="h3"
                fontFamily="Segoe UI Symbol"
                color="primary"
              >
                Handel
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
              Wir bieten Streichinstrumente und Bögen vom Schülerinstrument bis
              zum Meisterinstrument an. Diese können bei uns angespielt werden
              und gegebenenfalls in den eigenen Räumen ausprobiert werden.
              Saiten und weiteres Zubehör sind ebenfalls erhältlich.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
            }}
          >
            <ImageCarousel images={[header]} />
          </Box>
        </>
      )}
    </Box>
  );
}

export default Handel;
