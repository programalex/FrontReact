import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    background: {
      default: "#e5e7eb"
    },
    primary: {
      main: '#fd6a21',
    },
    secondary: {
      main: '#42129B',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;

