import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ImageCarousel from "../components/Carousel";
import handel from "../assets/handel.jpg";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

import neubau0 from "../assets/neubau0.webp";
import neubau1 from "../assets/neubau1.webp";
import neubau2 from "../assets/neubau2.webp";
import neubau3 from "../assets/neubau3.webp";
import neubau4 from "../assets/neubau4.webp";
import neubau5 from "../assets/neubau5.webp";
import neubau6 from "../assets/neubau6.webp";
import neubau7 from "../assets/neubau7.webp";
import neubau8 from "../assets/neubau8.webp";
import neubau9 from "../assets/neubau9.webp";
import neubau10 from "../assets/neubau10.webp";
import neubau11 from "../assets/neubau11.webp";
import neubau12 from "../assets/neubau12.webp";
import neubau13 from "../assets/neubau13.webp";
import neubau14 from "../assets/neubau14.webp";
import neubau15 from "../assets/neubau15.webp";
import neubau16 from "../assets/neubau16.webp";

function Neubau() {
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
                Neubau
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ImageCarousel
              images={[
                neubau0,
                neubau1,
                neubau2,
                neubau3,
                neubau4,
                neubau5,
                neubau6,
                neubau7,
                neubau8,
                neubau9,
                neubau10,
                neubau11,
                neubau12,
                neubau13,
                neubau14,
                neubau15,
                neubau16,
              ]}
            />
          </Box>
          <Footer />
        </>
      )}
    </Box>
  );
}

export default Neubau;
