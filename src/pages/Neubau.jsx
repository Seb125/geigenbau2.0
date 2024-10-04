import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import handel from "../assets/handel.jpg";
import test from "../assets/test.jpg";
import { Typography } from "@mui/material";
import OSMMap from "../components/OSMMap";
import ImageCarousel from "../components/Carousel";

function Neubau() {
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
      <Box
        sx={{
          position: "relative",
          width: "90%",
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
      <Box
        className="text-box"
      >
        <Typography
          variant="h5"
          fontFamily="Segoe UI Symbol"
          color="secondary"
          align="center"
        >
          Wir bieten Streichinstrumente und Bögen vom Schülerinstrument bis zum
          Meisterinstrument an. Diese können bei uns angespielt werden und
          gegebenenfalls in den eigenen Räumen ausprobiert werden. Saiten und
          weiteres Zubehör sind ebenfalls erhältlich.
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%"
        }}
      >
        <ImageCarousel images={[handel, test]} />
      </Box>
    </Box>
  );
}

export default Neubau;
