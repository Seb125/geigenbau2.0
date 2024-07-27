import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import werkstatt from "../assets/geigenbau-werkstatt.jpg"
import test from "../assets/test.jpg";
import logo from "../assets/logo.png";
import ImageCarousel from "../components/Carousel";


function Test() {
  return (
    <Box sx={{position:"relative", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      
      <ImageCarousel />
    </Box>
  )
}

export default Test