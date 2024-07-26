import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

function Footer() {
  return (
    <div>
      <Divider
        variant="fullWidth"
        color="secondary"
        sx={{ color: "aqua", borderColor: "lightgray", marginTop: "80px" }}
      />
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
        marginTop={5}
        marginBottom={3}
      >
        <Typography variant="h6" fontFamily="Segoe UI Symbol" color="secondary">
          Impressum
        </Typography>
        <Typography variant="h6" fontFamily="Segoe UI Symbol" color="secondary">
          Datenschutz
        </Typography>
      </Stack>
    </div>
  );
}

export default Footer;
