import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import werkstatt from "../assets/geigenbau-werkstatt.jpg"
import test from "../assets/test.jpg";
import logo from "../assets/logo.png";

function Test() {
  return (
    <Box sx={{position:"relative", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <img src={test} style={{width:"95vw", margin:"10px"}} />
    <Box sx={{position:"absolute", top:"20px", left:"40%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <img src={logo} />
        <h1 className="text-secondary">Schwarz Duscheleit Geigenbau</h1>
    </Box>

    </Box>
  )
}

export default Test