import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: "#FCC822",
            contrastText: "#FFF",
        },
        secondary: {
            main: "#333333",
        },
        background: {
            default: "#FFF",
        }
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Poppins"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
        ].join(','),
        body1: {
            fontSize: "1rem",
        }
    },
});