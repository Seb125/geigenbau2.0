import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import violinIcon from "../assets/violin_icon.svg";
import logo from "../assets/logo.png";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const navigate = useNavigate();

  const DrawerList = (
    <Box sx={{ width: 250, marginTop: "20px" }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/");
            }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Wir"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/reparatur");
            }}
          >
            <ListItemIcon>
            <MusicNoteIcon />
            </ListItemIcon>
            <ListItemText primary={"Reparatur und Restauration"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/mietinstrumente");
            }}
          >
            <ListItemIcon>
            <MusicNoteIcon />
            </ListItemIcon>
            <ListItemText primary={"Mietinstrumente"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/neubau");
            }}
          >
            <ListItemIcon>
            <MusicNoteIcon />
            </ListItemIcon>
            <ListItemText primary={"Neubau"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/handel");
            }}
          >
            <ListItemIcon>
              <MusicNoteIcon />
            </ListItemIcon>
            <ListItemText primary={"Verkauf von Geigen, Bratschen und Celli"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/kontakt");
            }}
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={"Kontakt"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon color="secondary" />
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="left"
        sx={{ position: "absolute" }}
        variant="temporary"
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
