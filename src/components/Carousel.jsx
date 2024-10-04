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
          
        }}
      >
        {images.map((image, i) => (
          <Box
            component="img"
            sx={{
              position: "relative",
              left: "50%",
              transform: "translate(-50%)"
            }}
            className="carousel-image"
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
