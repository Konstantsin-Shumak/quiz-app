import React from "react";
import { Grid, Typography } from "@mui/material";
import { useStyles } from "./useStyles";

export const Quiz = () => {

    const styles = useStyles();

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            className={styles.container}>
            <Grid
                container
                direction="column"
                alignContent="center"
                justifyContent="space-around"
                className={styles.container__quiz_block}>
                <Typography variant="h5" textAlign="center">Вопрос?</Typography>
                <Grid
                    container
                    direction="column"
                    alignContent="center"
                    className={styles.quiz_block}>
                    <Grid item>
                        Ответ 1
                    </Grid>
                    <Grid item>
                        Ответ 2
                    </Grid>
                    <Grid item>
                        Ответ 3
                    </Grid>
                    <Grid item>
                        Ответ 4
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}