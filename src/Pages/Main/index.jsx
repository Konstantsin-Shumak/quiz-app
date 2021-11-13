import React from "react";
import { Box, Container, Grid, Hidden } from "@mui/material";
import background from "../../Assets/Image/background.svg";

export const Main = () => {
    return (
        <Container>
            <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                style={{ minHeight: "100vh", width: "100%" }}
            >
                <Hidden mdDown>
                    <Grid item
                        style={{ width: "48%" }}>
                        <img src={background} alt="background" width="100%" />
                    </Grid>
                </Hidden>
                <Grid item
                    style={{ width: "50%" }}
                    mdDown={12}>
                    <Box
                        style={{
                            width: "100%",
                            height: "500px",
                            backgroundColor: "blue"
                        }}>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}