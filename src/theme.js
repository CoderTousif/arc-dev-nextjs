import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';

const primaryColor = blue[800];
const secondaryColor = orange[300];

const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
        },
        secondary: {
            main: secondaryColor,
        },
    },
    typography: {
        tab: {
            textTransform: 'none',
            fontWeight: 700,
            color: 'white',
            fontSize: '1rem',
        },
        estimate: {
            fontFamily: 'Pacifico',
            borderRadius: '50px',
            textTransform: 'none',
        },
    },
    background: {
        default: '#fff',
    },
    overrides: {
        MuiInputLabel: {
            root: {
                color: primaryColor,
                fontSize: '1rem',
            },
        },
        MuiInput: {
            underline: {
                '&:before': {
                    borderBottom: `2px solid ${primaryColor}`,
                },
                '&:hover:not($disabled):not($focused):not($error):before': {
                    borderBottom: `2px solid ${primaryColor}`,
                },
            },
        },
    },
});

export default theme;
