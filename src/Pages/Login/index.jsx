import React from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';
import { useStyles } from './useStyles';

export const Login = () => {

    const styles = useStyles();

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__form_block}>
                <Typography
                    variant="h3"
                    align="center"
                    mb={5}>
                    Login
                </Typography>
                <Box
                    component="form"
                    className={styles.form}
                >

                    <TextField
                        required
                        id="outlined-required"
                        label="Login"
                    /><br />

                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        type="password"
                    /><br />
                    
                    <Button
                        variant="contained">
                        Login
                    </Button>
                </Box>
            </div>
        </div>
    );
}