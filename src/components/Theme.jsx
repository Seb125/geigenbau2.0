// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e3e3e3', // Custom primary color
    },
    secondary: {
      main: '#dc004e', // Custom secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Custom font
  },
});

export default theme;
