import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import handel from "../assets/handel.jpg";
import test from "../assets/test.jpg";
import { Typography } from "@mui/material";
import ImageCarousel from "../components/Carousel";

function Mietinstrumente() {
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
        <img
          src={handel}
          style={{
            objectFit: "cover",
            margin: "10px",
            height: "500px",
            width: "95vw",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "45%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "2px solid #e3e3e3",
            padding: "10px 25px",
            zIndex: 2,
          }}
        >
          <Typography variant="h2" fontFamily="Segoe UI Symbol" color="primary">
            Mietinstrumente
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "100px",
          marginTop: "50px",
          width: "70%",
        }}
      >
        <Typography
          variant="h5"
          fontFamily="Segoe UI Symbol"
          color="secondary"
          align="center"
        >
          Wir verleihen Geigen, Bratschen und Celli in allen Größen (1/16 - 4/4)
          und Qualitäten. Die Instrumente werden in unserer Werkstatt optimal
          hergerichtet und spielfertig gemacht. Geigen können ab 17.-€
          (inkl.Versicherung) ausgeliehen werden, Celli ab 25.-€, inklusive
          Bogen und Etui/Hülle (bei Celli ist die Versicherung nicht im
          Mietpreis enthalten). Die Mindestmietdauer beträgt 3 Monate, danach
          monatlich kündbar. Bei einem späteren Instrumentenkauf werden bis zu 6
          Monatsmieten angerechnet. Saiten und weiteres Zubehör sind ebenfalls
          erhältlich.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "70%",
        }}
      >
        <ImageCarousel images={[handel, test]} />
      </Box>
    </Box>
  );
}

export default Mietinstrumente;
