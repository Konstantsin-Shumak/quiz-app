import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Grid, Stepper, Step, StepButton, Button, Box, Typography } from "@mui/material";
import { fetchQuestionsAsync } from "../../Services/fetchQuestionsAsync";
import { styles } from "./styles";

export const Quiz = () => {

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const [questions, setQuestions] = useState([]);
  const [points, setPoints] = useState(0);

  const totalSteps = useCallback(() => questions.length, [questions]);

  const completedSteps = useCallback(() => Object.keys(completed).length, [completed]);

  const isLastStep = useCallback(() => activeStep === totalSteps() - 1, [activeStep, totalSteps]);

  const allStepsCompleted = useCallback(() => completedSteps() === totalSteps(), [completedSteps, totalSteps]);

  const handleNext = useCallback(() => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ?
        questions.findIndex((_, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  }, [isLastStep, allStepsCompleted, questions, completed, activeStep]);

  const handleBack = useCallback(() => setActiveStep((prevActiveStep) => prevActiveStep - 1), []);

  const handleStep = useCallback((step) => () => {
    if (activeStep === questions.length &&
      completed[activeStep])
      return;
    else
      setActiveStep(step);
  }, [activeStep, completed, questions]);

  const handleComplete = useCallback((isCorrect) => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    if (isCorrect) setPoints(prev => prev + 1)
    setCompleted(newCompleted);
    console.log(completed)
    handleNext();
  }, [activeStep, completed, handleNext]);

  const handleReset = useCallback(() => {
    setActiveStep(0);
    setCompleted({});
    setPoints(0);
  }, []);

  const getResult = useMemo(() => `${points} of ${questions.length}`, [points, questions]);

  const isComplite = useMemo(() => (activeStep !== questions.length && completed[activeStep]), [activeStep, questions, completed]);

  const mixQuestions = useCallback((questions) =>
    questions.sort(() =>
      Math.random() - 0.5).map(question =>
        question.answerOptions.sort(() => Math.random() - 0.5))
    , []);

  useEffect(() => {
    setIsLoading(true);
    fetchQuestionsAsync()
      .then(questions => {
        mixQuestions(questions);
        setQuestions(questions);
      })
      .finally(() => setIsLoading(false))
  }, [mixQuestions]);

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
            {questions.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton color="inherit" onClick={handleStep(index)} />
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
                sx={{ ...styles.question_title }}>
                {allStepsCompleted() ?
                  getResult
                  :
                  questions[activeStep]?.questionText}
              </Typography>
            </Grid>

            <Grid
              sx={{ ...styles.answers__block }}>
              {questions[activeStep]?.answerOptions?.map((answer, index) =>
                <Button
                  {...(isComplite && { disabled: true })}
                  key={index}
                  variant="contained"
                  size="large"
                  sx={{ ...styles.answer_button }}
                  onClick={() => handleComplete(answer.isCorrect)}
                >
                  {answer.answerText}
                </Button>
              )}
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
            <Button
              size="large"
              variant="contained"
              color="secondary"
              onClick={handleReset}
            >
              Reset
            </Button>
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
            </>
          }
        </Grid>
      </Grid>
    </Grid >
  );
}