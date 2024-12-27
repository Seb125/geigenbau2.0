import { Typography, Box } from "@mui/material";
import Footer from "../components/Footer";

function Impressum() {
  return (
    <Box sx={{marginTop: "80px"}}>
      <Typography
        variant="h4"
        fontFamily="Segoe UI Symbol"
        color="secondary"
        align="center"
        marginBottom="50px"
      >
        Impressum
      </Typography>
      <Typography
        variant="h5"
        fontFamily="Segoe UI Symbol"
        color="secondary"
        align="center"
      >
        <p>Josef Schwarz, Dorothea Duscheleit Geigenbaumeister </p>
        <p>Halmstrasse 2, 14050 Berlin</p>
        <p>Tel: 030 3015564</p>
        <p>Email: schwarz.duscheleit@arcor.de</p> 
         <p>USt-IdNr. gem.§ 27a UStG: DE 135 595 356 </p>
         <p>Inhaltlich verantwortlich gem.§ 55 II RStV: Josef Schwarz, Dorothea Duscheleit</p>
      </Typography>
    </Box>
  );
}

export default Impressum;
