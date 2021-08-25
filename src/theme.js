import { createTheme, } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: "Lato"
  },
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#14213d',
    },
    error: {
      main: red.A400,
    },
    warning: {
      main: "#e71d36"
    },
    info: {
      main: "#fca311"
    }
  },
});

export default theme;