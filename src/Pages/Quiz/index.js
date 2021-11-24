import React, { useState } from "react";
import { Grid, Stepper, Step, StepButton, Button, Box, Typography } from "@mui/material";

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
      sx={{ minHeight: "100vh" }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-evenly"
        sx={{ height: "580px", boxShadow: 4 }}>
        <Grid sx={{
          width: 1 / 2,
        }}>
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
          sx={{
            width: 1,
            backgroundColor: "primary.main",
          }}>
          <Typography
            variant="h3"
            textAlign="center"
            sx={{
              color: "#fff",
              p: "45px 0"
            }}>Question?</Typography>
        </Grid>
        <Grid
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridRowGap: "1em",
            gridColumnGap: "1em",
          }}>
          <Button variant="contained" size="large" sx={{ height: "85px", width: "150px" }}>Ответ 1</Button>
          <Button variant="contained" size="large" sx={{ height: "85px", width: "150px" }}>Ответ 2</Button>
          <Button variant="contained" size="large" sx={{ height: "85px", width: "150px" }}>Ответ 3</Button>
          <Button variant="contained" size="large" sx={{ height: "85px", width: "150px" }}>Ответ 4</Button>
        </Grid>
        <Grid
          container
          justifyContent="space-evenly"
          mt={5}
          sx={{ width: 1/2 }}>
          {allStepsCompleted()
            ?
            <Button size="large" variant="contained" color="secondary" onClick={handleReset}>Reset</Button>
            :
            <>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
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