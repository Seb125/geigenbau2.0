import Stack from "@mui/material/Stack";
import Sidebar from "./Sidebar";
import Divider from "@mui/material/Divider";
import logo from "../assets/logo.png"

function Menu() {
  return (
    <div><Stack
    direction="row"
    spacing={2}
    alignItems="center"
    justifyContent="space-between"
  >

    <img src={logo} style={{width:"10%"}} />
    <h1 className="text">Schwarz Duscheleit Geigenbau</h1>
    <Sidebar />
    
  </Stack>
  <Divider
    variant="fullWidth"
    sx={{ color: "aqua", borderColor: "lightgray", marginTop: "10px" }}
  /></div>
  )
}

export default Menu