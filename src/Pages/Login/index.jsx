import React from "react";
import { Grid, Hidden, Typography, TextField, Box, Button } from "@mui/material";
import background from "../../Assets/Image/login-background.svg";
import logo from "../../Assets/Image/logo.svg";
import { styles } from "./styles";

export const Login = () => {

    return (
        <Grid
            container
            alignContent="center"
            sx={{ ...styles.wrapper }}
        >
            <Grid
                container
                sx={{ ...styles.wrapper__container }}>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    md={6}
                    sx={{ ...styles.container__left_block }}
                >
                    <img src={logo} alt="login-logo" width="250px" /> <br />
                    <Typography mb="45px">Welcome  back!<br />Please login/Signup to your account.</Typography>
                    <Box mb={6}>
                        <TextField
                            required
                            label="Login/email"
                            variant="outlined"
                            fullWidth
                            sx={{ ...styles.block__inputs }} />
                        <TextField
                            label="Password"
                            variant="outlined"
                            type="password"
                            fullWidth
                            sx={{ ...styles.block__inputs }} />
                    </Box>
                    <Button variant="contained" sx={{ ...styles.button }}>Login</Button>
                </Grid>
                <Hidden mdDown>
                    <Grid
                        container
                        justifyContent="center"
                        md={6}
                        sx={{ ...styles.container__right_block }}>
                        <img src={background} alt="login-background" width="250px" />
                    </Grid>
                </Hidden>
            </Grid>
        </Grid>
    );
}