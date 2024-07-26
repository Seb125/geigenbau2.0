import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import { useContext } from "react";
import MenuIcon from '@mui/icons-material/Menu';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const navigate = useNavigate();

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
       <ListItem disablePadding>
            <ListItemButton onClick={() => {navigate("/")}}>
              <ListItemIcon>
                 <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => {navigate("/buecher")}}>
              <ListItemIcon>
                 <ImportContactsIcon />
              </ListItemIcon>
              <ListItemText primary={"Handel"} />
            </ListItemButton>
          </ListItem> 
      </List>
      <Divider />
      <List>
      <ListItem disablePadding>
            <ListItemButton onClick={() => {navigate("/lieblingsbuecher")}}>
              <ListItemIcon>
                 <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary={"Mietinstrumente"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => {navigate("/profil")}}>
              <ListItemIcon>
                 <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={"Reparatur"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => {navigate("/login")}}>
              <ListItemIcon>
                 <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={"Neubau"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => {navigate("/register")}}>
              <ListItemIcon>
                 <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={"Kontakt"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => {logOutUser()}}>
              <ListItemIcon>
                 <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><MenuIcon color='secondary'/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
        {DrawerList}
      </Drawer>
    </div>
  );
}
