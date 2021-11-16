import React from "react";
import { Grid, Typography } from "@mui/material";
import { useStyles } from "./useStyles";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

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
                <FormLabel component="legend" textAlign="center" mb={3}>Pop quiz: MUI is...</FormLabel>
                <Grid
                    container
                    direction="row"
                    alignContent="center"
                    justifyContent="space-around"
                    spacing={5}
                    className={styles.quiz_block}>
                          <FormControl
                             sx={{ m: 3 }}
                             component="fieldset"
                             variant="standard">
                            <RadioGroup
                              aria-label="quiz"
                              name="quiz"
                            >
          <FormControlLabel value="best" control={<Radio />} label="The best!" />
          <FormControlLabel value="worst" control={<Radio />} label="The worst." />
        </RadioGroup>
        <Button variant="outlined">
          Check Answer
        </Button>
      </FormControl>
                </Grid>
            </Grid>
        </Grid>
    );
}