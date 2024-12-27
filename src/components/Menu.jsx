import Stack from "@mui/material/Stack";
import Sidebar from "./Sidebar";
import Divider from "@mui/material/Divider";
import logo from "../assets/logo.png";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "@mui/material/Link";
import { useState, useEffect } from "react";

function Menu() {
  const isMobile = useMediaQuery("(max-width:1000px)"); // Customize the breakpoint as needed
  const relUrl = window.location.pathname;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check when all images are loaded
    const promise = new Promise((resolve) => {
        const img = new Image();
        img.src = logo;
        img.onload = resolve;
        img.onerror = resolve; // Handle errors as well
      });
   

    promise.then(() => setLoading(false));
  }, []);


  return (
    <div>
      <Stack
        direction="row"
        spacing={12}
        alignItems="center"
        justifyContent="center"
        height="150px"
      >
        <Link href="/">
          {!loading ? (
            <img
              src={logo}
              className="logo-image"
              style={{
                width: "120px",
                border: "1px solid #666361",
                borderRadius: "5%",
              }}
            />
          ) : (
            ""
          )}
        </Link>
        {!isMobile && (
          <>
            <Link
              variant="h6"
              underline={relUrl === "/reparatur" ? "always" : "hover"}
              href="/reparatur"
              fontFamily="Segoe UI Symbol"
              color="secondary"
            >
              Reparatur und Restauration
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
              underline={relUrl === "/neubau" ? "always" : "hover"}
              href="/neubau"
              fontFamily="Segoe UI Symbol"
              color="secondary"
            >
              Neubau
            </Link>
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
              underline={relUrl === "/kontakt" ? "always" : "hover"}
              href="/kontakt"
              fontFamily="Segoe UI Symbol"
              color="secondary"
            >
              Kontakt
            </Link>
          </>
        )}

        {isMobile && <Sidebar />}
      </Stack>
      <Divider
        variant="fullWidth"
        sx={{
          color: "lightgray",
          borderColor: "lightgray",
          marginTop: "10px",
        }}
      />
    </div>
  );
}

export default Menu;
