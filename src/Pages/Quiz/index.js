import React, { useState } from "react";
import { Grid, Stepper, Step, StepButton, Button, Box, Typography } from "@mui/material";
import { styles } from "./styles";

const steps = [1, 2, 3, 4, 5];

export const Quiz = () => {

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const totalSteps = () => steps.length;

  const completedSteps = () => Object.keys(completed).length;

  const isLastStep = () => activeStep === totalSteps() - 1

  const allStepsCompleted = () => completedSteps() === totalSteps();

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ?
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleStep = (step) => () => {
    if (activeStep === steps.length &&
      completed[activeStep])
      return;
    else
      setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Grid
      container
      alignContent="center"
      sx={{ ...styles.wrapper }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-evenly"
        sx={{ ...styles.wrapper__container }}>
        <Grid sx={{ ...styles.container__pagination_block }}>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid
          sx={{ ...styles.question_block }}>
          <Typography
            variant="h3"
            textAlign="center"
            sx={{ ...styles.question_title }}>Question?</Typography>
        </Grid>
        <Grid
          sx={{ ...styles.answers__block }}>
          <Button variant="contained" size="large" sx={{ ...styles.anwer_button }}>Ответ 1</Button>
          <Button variant="contained" size="large" sx={{ ...styles.anwer_button }}>Ответ 2</Button>
          <Button variant="contained" size="large" sx={{ ...styles.anwer_button }}>Ответ 3</Button>
          <Button variant="contained" size="large" sx={{ ...styles.anwer_button }}>Ответ 4</Button>
        </Grid>
        <Grid
          container
          justifyContent="space-evenly"
          mt={5}
          sx={{ ...styles.navigations_block }}>
          {allStepsCompleted()
            ?
            <Button size="large" variant="contained" color="secondary" onClick={handleReset}>Reset</Button>
            :
            <>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </Button>
              <Box sx={{ ...styles.navigations_block__empty_place }} />
              <Button onClick={handleNext}>
                Next
              </Button>
              {activeStep !== steps.length &&
                completed[activeStep]
                ?
                <></>
                :
                <Button variant="contained" onClick={handleComplete}>
                  {completedSteps() === totalSteps() - 1
                    ? 'Finish'
                    : 'Complete Step'}
                </Button>
              }
            </>
          }
        </Grid>
      </Grid>
    </Grid >
  );
}