
import Menu from "./Menu";
import Footer from "./Footer";
import { Box } from "@mui/material";



function Layout({ children }) {
  return (
    <Box sx={{
      // Ensures scrollbar is always present
      height: '100vh', // Sets the height to fill the viewport
      width: '100%' // Ensures the width fills the container
    }}>
        <Menu />
        {children}
        <Footer />
    </Box>
  )
}

export default Layout