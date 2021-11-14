import React from "react";
import { Box, Container, Grid, Hidden, Button, Typography, TextField } from "@mui/material";
import background from "../../Assets/Image/background.svg";
import { useStyles } from "./useStyles";


export const Main = () => {

    const styles = useStyles();

    return (
        <Container>
            <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                style={{ height: "100vh", width: "100%" }}
            >
                <Hidden mdDown>
                    <Grid item md={6}>
                        <img src={background} alt="background" width="100%" />
                    </Grid>
                </Hidden>
                <Grid item
                    className={styles.container_content}
                    md={6} xs={12}>
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        justifyContent="space-around"
                        className={styles.content_block}>
                        <Grid container
                            direction="column"
                            alignItems="center"
                            textAlign="center">
                            <Typography variant="h5" mb={2}>Начать викторину</Typography>
                            <Typography variant="p">Для того, чтобы продолжить укажите номер викторины и нажмите кнопку "Начать викторину"</Typography>
                        </Grid>
                        <TextField
                            required
                            variant="standard"
                            label="Номер викторины"
                            fullWidth
                            color="secondary" focused
                            style={{ background: "#FFF" }} />

                        <Button
                            size="large"
                            variant="contained"
                            color="primary">
                            Начать викторину
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}