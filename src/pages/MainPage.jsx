import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import test from "../assets/test.jpg";
import { Typography } from "@mui/material";
import OSMMap from "../components/OSMMap";
import useMediaQuery from "@mui/material/useMediaQuery";
import Notification from "../components/Notification"

function MainPage() {
  const isMobile = useMediaQuery("(max-width:600px)"); // Customize the breakpoint as needed
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        alignItems: "center",
        position: "relative",
      }}
    >
      <img
        src={test}
        className="image"
      />
      <Box
        sx={{
          position: "absolute",
          top: isMobile ? "20px" : "90px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          className="header-text"
          color="primary"
          sx={{
            marginBottom: { xs: "10px", md: "0px" },
          }}
        >
          Schwarz Duscheleit Geigenbau
        </Typography>
        {!isMobile && (
          <Typography
            variant="h4"
            fontFamily="Segoe UI Symbol"
            color="primary"
            sx={{ fontSize: { xs: "25px", md: "40px" }, textAlign: "center" }}
          >
            Herzlich Willkommen
          </Typography>
        )}
        {!isMobile && (
          <Typography
            variant="h6"
            fontFamily="Segoe UI Symbol"
            color="primary"
            sx={{ fontSize: { xs: "10px", md: "20px" }, textAlign: "center" }}
          >
            Wir freuen uns über Ihren Besuch oder eine Nachricht!
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: { xs: "50px", md: "100px" },
          marginTop: "50px",
        }}
      >
        <Typography
          variant="h4"
          fontFamily="Segoe UI Symbol"
          color="secondary"
          sx={{ marginBottom: "20px", textAlign: "center" }}
        >
          Öffnungszeiten
        </Typography>
        <Typography
          variant="h5"
          fontFamily="Segoe UI Symbol"
          color="secondary"
          textAlign="center"
          display="flex"
          flexDirection="column"
        >
          <span>Montags 13-18 Uhr</span>{" "}
          <span>Dienstag-Freitags 11-18 Uhr</span>{" "}
          <span>Samstag nach Vereinbarung</span>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Grid
          container
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: isMobile ? "column" : "row",
          }}
        >
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
                schwarz.duscheleit@arcor.de
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
          <Grid
            item
            xs={4}
            sm={4}
            md={6}
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              marginTop: isMobile ? "30px" : "0px"
            }}
          >
            <OSMMap />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Notification />
      </Box>
    </Box>
  );
}

export default MainPage;
