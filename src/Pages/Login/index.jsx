import React from "react";
import { Grid, Hidden, Typography, TextField, Box, Button } from "@mui/material";
import background from "../../Assets/Image/login-background.svg";
import logo from "../../Assets/Image/logo.svg";

export const Login = () => {

    return (
        <Grid
            container
            alignContent="center"
            sx={{ minHeight: "100vh" }}
        >
            <Grid
                container
                sx={{ height: "580px", boxShadow: 4 }}>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    md={6}
                    p="30px">
                    <img src={logo} alt="login-logo" width="250px" /> <br />
                    <Typography mb="45px">Welcome  back!<br />Please login/Signup to your account.</Typography>
                    <Box mb={6}>
                        <TextField
                            required
                            label="Login/email"
                            variant="outlined"
                            fullWidth
                            sx={{marginBottom: "10px"}}></TextField>
                        <TextField
                            label="Password"
                            variant="outlined"
                            type="password"
                            fullWidth></TextField>
                    </Box>
                    <Button variant="contained" sx={{ width: "75px" }}>Login</Button>
                </Grid>
                <Hidden mdDown>
                    <Grid
                        container
                        justifyContent="center"
                        md={6}
                        sx={{ backgroundColor: "#F3F3F3" }}>
                        <img src={background} alt="login-background" width="250px" />
                    </Grid>
                </Hidden>
            </Grid>
        </Grid>
    );
}