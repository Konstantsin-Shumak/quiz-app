import React from "react";
import { Box, Grid} from "@mui/material";
import background from "../../Assets/Image/background.svg";

export const Main = () => {
    return (
        <>
            <Box
                sx={{
                    height: "100vh",
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: "no-repeat",
                }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>

                    </Grid>
                    <Grid item xs={6}>
                        <div className="asd">asdasd</div>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}