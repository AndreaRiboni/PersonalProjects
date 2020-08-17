import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
      backgroundColor: "#f57676",
      color: "white",
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },    
  }));
  
  function getSteps() {
    return ['2016', '2017', '2018', '2019'];
  }
  
function getStepContent(step) {
    switch (step) {
        case 0:
            return `Donec hendrerit diam vel pellentesque sollicitudin.`;
        case 1:
            return 'Mauris suscipit pretium venenatis.';
        case 2:
            return `Sed consequat rutrum volutpat. Ut ut fringilla odio.`;
        case 3:
            return 'Phasellus nisl magna, efficitur vel iaculis et, gravida ac turpis.';
        default:
            return 'Suspendisse semper metus quis lacus feugiat, quis pretium neque efficitur.';
        }
  }
  
  export default function Recap() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
  
    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label} >
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Go back
                    </Button>
                    <Button
                      variant="contained"
                      backgroundColor="#f57676"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'End' : 'Next'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography>Curabitur ac tempus nulla. Aenean ultrices neque eget tellus hendrerit vestibulum.</Typography>
            <Button onClick={handleReset} className={classes.button}>
              Redo
            </Button>
          </Paper>
        )}
      </div>
    );
  }