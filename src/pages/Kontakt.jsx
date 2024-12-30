import emailjs from "@emailjs/browser";
import {
  Card,
  CardContent,
  Button,
  CardActions,
  Grid,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import main from "../assets/main.webp";
import OSMMap from "../components/OSMMap";
import useMediaQuery from "@mui/material/useMediaQuery";
import Checkbox from "@mui/material/Checkbox";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import Link from "@mui/material/Link";
import { useEffect } from "react";

function Kontakt() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      // Check when all images are loaded
      const promise = new Promise((resolve) => {
        const img = new Image();
        img.src = main;
        img.onload = resolve;
        img.onerror = resolve; // Handle errors as well
      });

      promise.then(() => setLoading(false));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const isMobile = useMediaQuery("(max-width:600px)");
  // form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // for DatePicker createdAt needs to be a dajs object
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
    datenschutz: false,
  });
  const [checked, setChecked] = useState(false);
  const [send, setSend] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };


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
        <Box height="100vh" />
      ) : (
        <>
          
          <Box
            sx={{
              display: "flex",
              flexDirection: {xs:"row", sm: "column"},
              justifyContent: "start",
              alignItems: "start",
              width: "100%",
              marginTop: {xs:"50px", sm: "150px"},
              height:"100vh"
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
                    <a href="mailto:schwarz.duscheleit@arcor.de">schwarz.duscheleit@arcor.de</a>
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
                  marginTop: isMobile ? "60px" : "0px",
                }}
              >
                <OSMMap />
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </Box>
  );
}

export default Kontakt;
