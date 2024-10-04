import Carousel from "react-material-ui-carousel";
import { Paper, Box } from "@mui/material";

function ImageCarousel({ images }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Carousel sx={{ width: "100%",  }} >
        {images.map((image, i) => (
          <Box
            component="img"
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
