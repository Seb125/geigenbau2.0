import { useState } from 'react';
import { Grid, Card, CardMedia, Modal, Box} from '@mui/material';


function ImageGallery({ images }) {

    const [open, setOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState({});

    const handleOpen = (img) => {
        setOpen(true);
        setSelectedImg(img);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ padding: 1, width: "100%" }}>
            <Grid container spacing={2} sx={{display: "flex", justifyContent: "center"}}>
                {images.map((img, index) => (
                    <Grid item xs={5} sm={4} md={4} key={index}>
                        <Card>
                            <CardMedia
                                component="img"
                                width="300"
                                image={img.src}
                                alt={img.title}
                                onClick={() => handleOpen(img)}
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, outline: 'none', width:  {xs: '90vw', xm: '80vw', md: '60vw'}, maxHeight: '90vh', display: "flex", justifyContent: "center" }}>
                    <img src={selectedImg.src} alt="Selected" style={{ maxWidth: '100%', maxHeight: '90vh' }} />
                </Box>
            </Modal>
        </Box>
    );
}

export default ImageGallery;
