import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    wrapper: {
        minHeight: "100vh",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
    },
    wrapper__form_block: {
        padding: "3rem 5rem",
        boxShadow: "0 5px 20px rgba(0, 0, 0, 0.15)",
        borderRadius: "25px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
    }
});