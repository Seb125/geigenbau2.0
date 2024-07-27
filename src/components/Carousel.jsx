
import Carousel from 'react-material-ui-carousel';
import { Paper, Box } from '@mui/material';



function ImageCarousel({ images }) {
  return (
    <Box sx={{  flexGrow: 1, width: "100%", margin: "10px" }}>
      <Carousel>
        {images.map((image, i) => (
          
            <Box
              component="img"
              sx={{
                width: '100%',
                height: '500px',
                objectFit: 'cover'
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