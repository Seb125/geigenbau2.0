import Carousel from "react-material-ui-carousel";
import { Paper, Box } from "@mui/material";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

function ImageCarousel({ images }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check when all images are loaded
    const promises = images.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve; // Handle errors as well
      });
    });

    Promise.all(promises).then(() => setLoading(false));
  }, [images]);

  return (
    <Box
      sx={{
        width: { xs: "90%", xm: "70%", md: "70%" },
        height: { xs: "500px", xm: "800px", md: "800px" },
      }}
    >
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Carousel
          animation="fade"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          NextIcon=">"
          PrevIcon="<"
          navButtonsAlwaysVisible={true}
          navButtonsProps={{
            sx: {
              backgroundColor: {
                xs: "rgb(0,0,0,0.0)",
                xm: "rgb(128, 128, 128)",
                md: "rgb(128, 128, 128)",
              },
              borderRadius: 5,
              tabindex: "-1",
              "&:hover": {
                backgroundColor: "inherit", // Prevent change on hover
              },
              "&:active": {
                backgroundColor: "inherit", // Prevent change on click
              },
            },
          }}
          navButtonsWrapperProps={{
            sx: {
              bottom: { xs: "70px", xm: "70px", md: "60px" },
              top: "unset",
            },
          }}
          autoPlay={true}
          interval={3000}
          timeout={1000}
          indicatorIconButtonProps={{
            style: {
              padding: "5px",
              color: "primary",
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              backgroundColor: "secondary",
            },
          }}
          indicatorContainerProps={{
            style: {
              marginTop: "50px",
              textAlign: "center",
            },
          }}
        >
          {images.map((image, i) => (
            <Box
              component="img"
              sx={{
                position: "relative",
                left: "50%",
                transform: "translate(-50%)",
                width: { xs: "400px", xm: "700px", md: "800px" },
                height: "auto",
              }}
              className="carousel-image"
              src={image}
              alt={`Slide ${i}`}
              key={i}
            />
          ))}
        </Carousel>
      )}
    </Box>
  );
}

export default ImageCarousel;
