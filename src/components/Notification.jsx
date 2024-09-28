
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

const Notification = ({ open }) => {
  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      sx={{height: "100vh"}}
    >
      <Alert severity="info" sx={{ display: 'block', textAlign: 'center', height: "200px", width: "900px"}}>
        <span style={{fontSize: "30px"}}>Diese Website befindet sich im Aufbau und steht ab Januar 2025 zur Verfügung!</span>
      </Alert>
    </Snackbar>
  );
};

export default Notification;
