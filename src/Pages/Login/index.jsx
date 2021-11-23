import React from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
import { useStyles } from "./useStyles";

export const Login = () => {

    const classes = useStyles();

    return (
        <Grid
            container
            alignItems="center"
            justifyContent="center"
            className={classes.container}>
            <Grid item>
                <Grid
                    container
                    alignItems="center"
                    justifyContent="space-around"
                    className={classes.form}>
                    <Typography
                        variant="h5"
                        color="primary"
                        textAlign="center"
                    >Login</Typography>

                    <TextField
                        required
                        variant="outlined"
                        label="Login"
                        fullWidth />

                    <TextField
                        required
                        variant="outlined"
                        label="Password"
                        type="password"
                        fullWidth />

                    <Button
                        size="large"
                        variant="contained"
                        color="primary">
                        LOGIN
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}