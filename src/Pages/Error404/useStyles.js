import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    page: {
        backgroundColor: "#0414a7",
        minHeight: "100vh",
        fontFamily: "VT323, momspace",
        color: "#e0e2f4",
    },
    container: {
        width: "90%",
        margin: "auto",
        maxWidth: "640px",
        paddingTop: "10%",
    },
    bg: {
        backgroundColor: "#aaaaaa",
        padding: "0 15px 2px 13px",

    },
    title: {
        marginBottom: "50px",
        textAlign: "center",
        color: "#0414a7",
    },
    nav: {
        marginTop: "35px",
        textAlign: "center",
    },
    link: {
        textDecoration: "none",
        padding: "0 9px 2px 8px",
        color: "#e0e2f4",
        "&:hover": {
            backgroundColor: "#aaaaaa",
            color: "#0414a7",
        }
    }

});