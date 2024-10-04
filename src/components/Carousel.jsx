import Carousel from "react-material-ui-carousel";
import { Paper, Box } from "@mui/material";

function ImageCarousel({ images }) {
  return (
    <Box>
      <Carousel
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {images.map((image, i) => (
          <Box
            component="img"
            sx={{
              width: "100%",
              position: "relative",
              marginBottom: "50px",
              
            }}
            src={image}
            alt={`Slide ${i}`}
            key={i}
          />
        ))}
      </Carousel>
    </Box>
  );
}

export default ImageCarousel;
