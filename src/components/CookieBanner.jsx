import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState, useEffect } from "react";


export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [userConsent, setUserConsent] = useState(null);
  

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('userConsent');
    if (consent === null) {
      setIsVisible(true);
    } else {
      setUserConsent(consent);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('userConsent', 'accepted');
    setUserConsent('accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('userConsent', 'declined');
    setUserConsent('declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    
      <Dialog
        open={true}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        width= "100%"
      >
        <DialogTitle id="alert-dialog-title">
          {"Cookies"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Diese Website verwendet keine Cookies.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAccept} autoFocus>
            Verstanden
          </Button>
        </DialogActions>
      </Dialog>
    
  );
}
