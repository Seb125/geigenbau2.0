import Stack from "@mui/material/Stack";
import Sidebar from "./Sidebar";
import Divider from "@mui/material/Divider";
import logo from "../assets/logo.png";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "@mui/material/Link";

function Menu() {
  const isMobile = useMediaQuery("(max-width:600px)"); // Customize the breakpoint as needed
  const relUrl = window.location.pathname;

  console.log(relUrl);

  return (
    <div>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-around"
      >
        <Link href="/">
          <img
            src={logo}
            style={{
              width: "60%",
              border: "1px solid #666361",
              borderRadius: "5%",
            }}
          />
        </Link>
        {!isMobile && (
          <>
            <Link
              variant="h6"
              underline={relUrl === "/handel" ? "always" : "hover"}
              href="/handel"
              fontFamily="Segoe UI Symbol"
              color="secondary"
            >
              Handel
            </Link>
            <Link
              variant="h6"
              underline={relUrl === "/mietinstrumente" ? "always" : "hover"}
              href="/mietinstrumente"
              fontFamily="Segoe UI Symbol"
              color="secondary"
            >
              Mietinstrumente
            </Link>
            <Link
              variant="h6"
              underline={relUrl === "/reparatur" ? "always" : "hover"}
              href="/reparatur"
              fontFamily="Segoe UI Symbol"
              color="secondary"
            >
              Reparatur
            </Link>
            <Link
              variant="h6"
              underline={relUrl === "/neubau" ? "always" : "hover"}
              href="/neubau"
              fontFamily="Segoe UI Symbol"
              color="secondary"
            >
              Neubau
            </Link>
            <Link
              variant="h6"
              underline={relUrl === "/kontakt" ? "always" : "hover"}
              href="/kontakt"
              fontFamily="Segoe UI Symbol"
              color="secondary"
            >
              Kontakt
            </Link>
            <Divider
              variant="fullWidth"
              color="secondary"
              sx={{
                color: "aqua",
                borderColor: "lightgray",
                marginTop: "10px",
              }}
            />
          </>
        )}

        {isMobile && <Sidebar />}
      </Stack>
    </div>
  );
}

export default Menu;
