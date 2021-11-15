import React from "react";
import { Grid, Hidden, Button, Typography, TextField } from "@mui/material";
import background from "../../Assets/Image/background.svg";
import { useStyles } from "./useStyles";


export const Main = () => {

    const styles = useStyles();

    return (
        <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            className={styles.wrapper}>
            <Hidden mdDown>
                <Grid item md={6}>
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
                        justifyContent="center"
                        textAlign="center">
                        <Typography variant="h4" mb={2}>Начать викторину</Typography>
                        <Typography variant="p">Для того, чтобы продолжить укажите номер викторины и нажмите кнопку "Начать викторину"</Typography>
                    </Grid>
                    <TextField
                        required
                        variant="standard"
                        label="Номер викторины"
                        fullWidth
                        color="secondary"
                        style={{ background: "#FFF" }} />

                    <Button
                        size="large"
                        variant="contained"
                        color="secondary">
                        Начать викторину
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}