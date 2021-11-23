import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Hidden, Button, Typography } from "@mui/material";
import logo from "../../Assets/Image/logo.svg";
import background from "../../Assets/Image/background.svg";
import { QuizRoute } from "../../Routes";

export const Main = () => {

    const navigate = useNavigate();

    return (

        <Grid
            container
            direction="column"
            alignItems="center"
            sx={{ height: "100vh", }}
        >
            <Grid
                container
                justifyContent="space-between"
                sx={{ m: "30px 0", }}
            >
                <img src={logo} alt="logo" width="125px" />
                
                <Button variant="outlined" sx={{ fontSize: "14px" }}>Login</Button>
            </Grid>

            <hr width="100%" color="#ECECE8" />

            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                flexGrow="1"
            >
            
                <Grid md={6}>

                    <Typography variant="h1">Learn
                        new concepts
                        for each question</Typography>

                    <Typography
                        variant="body1"
                        sx={{ p: "35px 0" }}>We help you prepare for exams and quizes </Typography>

                    <Button variant="contained" onClick={() => navigate(QuizRoute)}>Start</Button>
                </Grid>

                <Hidden mdDown>
                    <img src={background} alt="main-background" />
                </Hidden>

            </Grid>
        </Grid >
    );
}