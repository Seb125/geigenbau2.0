import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import test from "../assets/test.jpg";
import { Typography } from "@mui/material";
import OSMMap from "../components/OSMMap";
import Paper from "@mui/material/Paper";

function MainPage() {
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
      <img src={test} style={{ objectFit: 'cover', margin: "10px", height: "800px", width: "95vw" }} />
      <Box
        sx={{
          position: "absolute",
          top: "90px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" fontFamily="Segoe UI Symbol" color="primary">
          Schwarz Duscheleit Geigenbau
        </Typography>
        <Typography variant="h4" fontFamily="Segoe UI Symbol" color="primary">
          Herzlich Willkommen
        </Typography>
        <Typography variant="h6" fontFamily="Segoe UI Symbol" color="primary">
          Wir freuen uns über Ihren Besuch oder eine Nachricht!
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "100px",
          marginTop: "50px",
        }}
      >
       
          <Typography
            variant="h4"
            fontFamily="Segoe UI Symbol"
            color="secondary"
            sx={{ marginBottom: "20px" }}
          >
            Öffnungszeiten
          </Typography>
          <Typography
            variant="h5"
            fontFamily="Segoe UI Symbol"
            color="secondary"
          >
            Montags 13-18 Uhr. Dienstag-Freitags 11-18 Uhr Samstag nach
            Vereinbarung
          </Typography>
        
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid
            item
            xs={2}
            sm={4}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h4"
                fontFamily="Segoe UI Symbol"
                color="secondary"
                sx={{ marginBottom: "20px" }}
              >
                Kontakt
              </Typography>
              <Typography
                variant="h6"
                fontFamily="Segoe UI Symbol"
                color="secondary"
              >
                E-Mail: schwarz.duscheleit@arcor.de
              </Typography>
              <Typography
                variant="h6"
                fontFamily="Segoe UI Symbol"
                color="secondary"
              >
                Tel: 030 3015564
              </Typography>
              <Typography
                variant="h6"
                fontFamily="Segoe UI Symbol"
                color="secondary"
              >
                Halmstrasse 2
              </Typography>
              <Typography
                variant="h6"
                fontFamily="Segoe UI Symbol"
                color="secondary"
              >
                14050 Berlin
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2} sm={4} md={6}>
            <OSMMap />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default MainPage;
