import Carousel from "react-material-ui-carousel";
import { Paper, Box } from "@mui/material";

function ImageCarousel({ images }) {
  return (
    <Box sx={{width: {xs: "90%", xm: "70%", md: "70%"}}}>
      <Carousel
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        NextIcon='>'
        PrevIcon='<'
        navButtonsAlwaysVisible={true}
        navButtonsProps={{
              sx: {
                 backgroundColor: {xs:'rgb(0,0,0,0.0)', xm: "rgb(128, 128, 128)", md: "rgb(128, 128, 128)"},
                 borderRadius: 5
              }
          }}
          navButtonsWrapperProps={{
              sx: {
                 bottom: {xs: "70px", xm: "70px", md:'60px'},
                 top: 'unset',
                 
              }
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
              width: {xs: "400px", xm:"700px" , md:"800px"},
              height:"auto"
              
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
