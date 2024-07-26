import Stack from "@mui/material/Stack";
import Sidebar from "./Sidebar";
import Divider from "@mui/material/Divider";
import logo from "../assets/logo.png";
import { Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';



function Menu() {

  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:600px)'); // Customize the breakpoint as needed


  return (
    <div >
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-around"
      >
        <img src={logo} style={{ width: "7%", border: "1px solid #666361", borderRadius: "5%" }} />
        {!isMobile && <>
        <Typography variant="h6" onClick={() => navigate("/handel")}  fontFamily="Segoe UI Symbol">Handel</Typography>
        <Typography variant="h6" fontFamily="Segoe UI Symbol">Mietinstrumente</Typography>
        <Typography variant="h6" fontFamily="Segoe UI Symbol">Reparatur</Typography>
        <Typography variant="h6" fontFamily="Segoe UI Symbol">Neubau</Typography>
        <Typography variant="h6" fontFamily="Segoe UI Symbol">Kontakt</Typography>
        </>
        }

        {isMobile && <Sidebar />}
      </Stack>
      <Divider
        variant="fullWidth"
        color="secondary"
        sx={{ color: "aqua", borderColor: "lightgray", marginTop: "10px" }}
      />
    </div>
  );
}

export default Menu;
