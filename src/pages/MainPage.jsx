import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import main from "../assets/main.jpg";
import { Typography } from "@mui/material";
import OSMMap from "../components/OSMMap";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect } from "react";
import Notification from "../components/Notification";
import info from "../assets/info.txt";

function MainPage() {

  const [infoText, setInfoText] = useState("");

  useEffect(() => {
    try {
      fetch(info)
      .then((r) => r.text())
      .then((text) => {
        setInfoText(text)
      })
      .catch((e)=> {
        console.log(e)
      })
      
    } catch (error) {
      console.log(error)
    }


  })


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
        src={main}
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
          marginTop: {xs: "20px", md: "50px"},
        }}
      >
      {isMobile && (
          <Typography
            variant="h4"
            fontFamily="Segoe UI Symbol"
            color="secondary"
            sx={{ fontSize: "25px", textAlign: "center" }}
          >
            Herzlich Willkommen
          </Typography>
        )}
        {isMobile && (
          <Typography
            variant="h6"
            fontFamily="Segoe UI Symbol"
            color="secondary"
            sx={{ fontSize: "15px", textAlign: "center", marginBottom: "30px" }}
          >
            Wir freuen uns über Ihren Besuch oder eine Nachricht!
          </Typography>
        )}
      <Typography
          variant="h5"
          fontFamily="Segoe UI Symbol"
          color="secondary"
          sx={{ marginBottom: "20px", textAlign: "center", width: {xs: "90%", md: "60%"}, fontSize: {xs: "15px", md: "25px"} }}
        >
          Josef Schwarz, geb. in Mittenwald und 
Dorothea Duscheleit, geb. in Berlin
erlernten Ihr Handwerk an der Staatl. Fachschule für Geigenbau Mittenwald von 1980-1983.


        </Typography>
        <Typography
          variant="h5"
          fontFamily="Segoe UI Symbol"
          color="secondary"
          sx={{ marginBottom: "20px", textAlign: "center", width: {xs: "90%", md: "60%"}, fontSize: {xs: "15px", md: "25px"}  }}
        >
Im Anschluss sammelten sie in versch. Meisterwerkstätten im In-und Ausland wertvolle Erfahrungen, u.a. in Frankreich als auch den Niederlanden, Den Haag bei Willem Bouman.

        </Typography>
        <Typography
          variant="h5"
          fontFamily="Segoe UI Symbol"
          color="secondary"
          sx={{ marginBottom: "60px", textAlign: "center", width: {xs: "90%", md: "60%"}, fontSize: {xs: "15px", md: "25px"}  }}
        >
Nach ihrer Meisterprüfung gründeten sie 1991 ihre eigene Geigenbauwerkstatt 
in Berlin-Charlottenburg.

        </Typography>
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
          {infoText.length > 0 ? <Box color="red">{infoText}</Box>: ""}
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
        {infoText.length > 0 ? (<Notification text={infoText}/>): ""}
      </Box>
    </Box>
  );
}

export default MainPage;
