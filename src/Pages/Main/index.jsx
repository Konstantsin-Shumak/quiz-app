import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Hidden, Button, Typography, TextField } from "@mui/material";
import background from "../../Assets/Image/background.svg";
import { useStyles } from "./useStyles";


export const Main = () => {

    const styles = useStyles();
    const navigate = useNavigate();

    return (
        <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            className={styles.wrapper}>
            <Hidden mdDown>
                <Grid item md={5}>
                    <img src={background} alt="background" width="100%" />
                </Grid>
            </Hidden>
            <Grid
                item
                md={6} xs={12}
                justifyContent="center"
                alignItems="center"
                className={styles.container}>
                <Grid
                    container
                    alignItems="center"
                    justifyContent="space-around"
                    className={styles.container__content_block}>
                    <Grid
                        container
                        direction="column">
                        <Typography variant="h3" sx={{ m: "0 auto 16px" }}>Начать викторину</Typography>
                        <Typography>Чтобы продолжить укажите номер опроса.</Typography>
                    </Grid>
                    <TextField
                        required
                        variant="standard"
                        label="Номер викторины"
                        fullWidth
                        color="primary" />

                    <Button
                        size="large"
                        variant="contained"
                        color="secondary"
                        onClick={() => navigate("/quiz")}>
                        Начать викторину
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}