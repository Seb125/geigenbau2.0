
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { Button, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const Notification = ({ text }) => {

  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  }


  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      sx={{height: "100px", width: "90%"}}
      onClose={handleClose}
    >
      <Alert
          onClose={handleClose}
          severity="info"
          variant="filled"
          sx={{ width: '100%', minHeight: "100px", display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          {text}
        </Alert>
    </Snackbar>
  );
};

export default Notification;
