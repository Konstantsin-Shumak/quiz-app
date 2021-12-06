import React, { useState, useEffect } from "react";
import { Grid, Stepper, Step, StepButton, Button, Box, Typography } from "@mui/material";
import { fetchQuestionsAsync } from "../../Services/fetchQuestionsAsync";
import { styles } from "./styles";

const steps = [1, 2, 3, 4, 5];

export const Quiz = () => {

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState("");
  const [questions, setQuestions] = useState([]);
  const [points, setPoints] = useState(0);

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

  useEffect(() => {
    setIsLoading(true);
    fetchQuestionsAsync()
      .then(questions => {
        setQuestions(questions);
        setCurrentQuestion(questions[0]);
      })
      .finally(() => setIsLoading(false))
  }, []);

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
        {!isLoading &&
          <>
            <Grid
              sx={{ ...styles.question_block }}>
              <Typography
                variant="h4"
                textAlign="center"
                sx={{ ...styles.question_title }}>{currentQuestion.questionText}</Typography>
            </Grid>
            <Grid
              sx={{ ...styles.answers__block }}>
              {currentQuestion.answerOptions?.map((answer, index) =>
                <Button key={index}
                  variant="contained"
                  size="large"
                  sx={{ ...styles.answer_button }}>{answer.answerText}</Button>)}
            </Grid>
          </>
        }
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