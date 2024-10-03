import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";

function Footer() {
  return (
    <div>
      <Divider
        variant="fullWidth"
        sx={{ color: "lightgray", borderColor: "lightgray", marginTop: "80px" }}
      />
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
        marginTop={5}
        marginBottom={3}
      >
        <Link variant="h6" href="/impressum" fontFamily="Segoe UI Symbol" color="secondary">
          Impressum
        </Link>
        <Link variant="h6" href="/datenschutz" fontFamily="Segoe UI Symbol" color="secondary">
          Datenschutz
        </Link>
      </Stack>
    </div>
  );
}

export default Footer;
