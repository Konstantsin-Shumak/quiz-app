import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Hidden, Button, Typography } from "@mui/material";
import logo from "../../Assets/Image/logo.svg";
import background from "../../Assets/Image/main-background.svg";
import { LoginRoute, QuizRoute } from "../../Routes";
import { styles } from "./styles";

export const Main = () => {

    const navigate = useNavigate();

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            sx={{ ...styles.wrapper }}
        >
            <Grid
                container
                justifyContent="space-between"
                sx={{ ...styles.wrapper__header }}
            >
                <img src={logo} alt="logo" width="125px" />

                <Button variant="outlined" sx={{ ...styles.button_login }} onClick={() => navigate(LoginRoute)}>Login</Button>
            </Grid>

            <hr width="100%" color="#ECECE8" />

            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                flexGrow="1"
            >

                <Grid item
                    md={6}
                    sx={{ ...styles.information }}>

                    <Typography variant="h3">Learn
                        new concepts
                        for each question</Typography>

                    <Typography
                        variant="body1"
                        sx={{ ...styles.info_p }}>We help you prepare for exams and quizes </Typography>

                    <Button variant="contained" onClick={() => navigate(QuizRoute)}>Start</Button>
                </Grid>

                <Hidden mdDown>
                    <img src={background} alt="main-background" />
                </Hidden>

            </Grid>
        </Grid >
    );
}