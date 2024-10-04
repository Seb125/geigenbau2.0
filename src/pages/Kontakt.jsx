import emailjs from "@emailjs/browser";
import {
  Card,
  CardMedia,
  CardContent,
  Button,
  CardActions,
  Grid,
  Typography
} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import test from "../assets/test.jpg";
import OSMMap from "../components/OSMMap";
import useMediaQuery from "@mui/material/useMediaQuery";

function Kontakt() {
  const isMobile = useMediaQuery("(max-width:600px)");
  // form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // for DatePicker createdAt needs to be a dajs object
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendMessage = async (name, email, message) => {
    emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
    const response = await emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      {
        to_email: "schwarz.duscheleit@hotmail.de",
        subject: "Email von " + email,
        message: message,
      }
    );
    console.log(response);

    console.log("Email sent successfully");
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      // valdiate input fields
      let valid = true;
      const newErrors = {
        name: "",
        email: "",
        message: "",
      };
      if (name.trim() === "") {
        newErrors.name = "Name darf nicht leer sein";
        valid = false;
      } else if (name.length > 28) {
        newErrors.name = "Name darf nicht mehr als 28 Zeichen beinhalten";
        valid = false;
      }
      if (email.trim() === "") {
        newErrors.email = "Email darf nicht leer sein";
        valid = false;
      } else if (email.length > 40) {
        newErrors.email = "Email darf nicht mehr als 820 Zeichen beinhalten";
        valid = false;
      }
      if (message.trim() === "") {
        newErrors.message = "Nachricht darf nicht leer sein";
        valid = false;
      } else if (message.length > 100) {
        newErrors.message =
          "Nachricht darf nicht mehr als 100 Zeichen beinhalten";
        valid = false;
      }
      setErrors(newErrors);
      // only when all validation conditions pass the data is updated and the "update view" will be left with a new rerender
      if (valid) {
        sendMessage(name, email, message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
      }}
    >
      <img
        src={test}
        className="contact-image"
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "90px",
        }}
      >
        <Card sx={{ width: "90%", maxWidth: 345, marginTop: "50px" }}>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                margin="normal"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={!!errors.name}
                helperText={errors.name}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                fullWidth
                multiline
                rows={4.3}
                margin="normal"
                label="Nachricht"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                error={!!errors.message}
                helperText={errors.message}
              />
              <CardActions>
                <Button type="submit" size="small" color="secondary">
                  Senden
                </Button>
              </CardActions>
            </form>
          </CardContent>
        </Card>
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
            xs={3}
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
    </Box>
  );
}

export default Kontakt;
