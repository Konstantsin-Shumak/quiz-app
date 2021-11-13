import React from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';

export const Login = () => {

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: "100vh" }}>
            <Grid item>
                <Typography variant="h5" color="primary">Login</Typography>
            </Grid>
            <Grid item>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center">

                    <TextField
                        required
                        variant="outlined"
                        label="Login"
                        fullWidth
                        style={{ marginBottom: "2rem" }} />

                    <TextField
                        required
                        variant="outlined"
                        label="Password"
                        type="password"
                        fullWidth
                        style={{ marginBottom: "2rem" }} />

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