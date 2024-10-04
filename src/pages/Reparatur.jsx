import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import handel from "../assets/handel.jpg";
import test from "../assets/test.jpg";
import { Typography } from "@mui/material";
import ImageCarousel from "../components/Carousel";

function Reparatur() {
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

export default Reparatur;
