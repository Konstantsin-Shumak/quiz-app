import React from "react";
import { Grid, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button } from "@mui/material";
import { useStyles } from "./useStyles";

export const Quiz = () => {

  const styles = useStyles();

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      className={styles.container}>
      <Grid
        container
        direction="column"
        className={styles.container__quiz_block}>
        <Grid item>
          <FormLabel component="legend" textAlign="center" mb={3}>Pop quiz: MUI is...</FormLabel>
        </Grid>
        <Grid item>
          <FormControlLabel value="best" control={<Radio />} label="The best!" />
          <FormControlLabel value="worst" control={<Radio />} label="The worst." />
        </Grid>
        <Grid item>
          <Button variant="outlined">
            Check Answer
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}