// dependencies
import { Modal } from "flowbite-react"
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useState } from "react";
const steps = [
    {
      label: 'Getting Started',
      description: `By this time you would have already set up your account. Congratulations.
      Ideally you should begin by making an entry in the write entry option. Make the entry personal
      and meaningful to you as it reflects your current emotional, physical and mental state today.`,
    },
    {
      label: 'Make a friend',
      description: 'Friends are important in our daily lives. At health diary we encourage making friends. Head over to the search tab and find some friends then send them a friend request. Once your request has been accepted you can tag your new friends in the entries you make and they can tag you as well.'
    },
    {
      label: 'Read and Support Friends',
      description: `You can read entries from other users if they tag you. You can also tag your friends as well.`
    },
  ];

const About = ({openAboutModal, setOpenAboutModal}) => {
    const [activeStep, setActiveStep] = useState(0);

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
    <>
      <Modal show={openAboutModal} onClose={() => {setOpenAboutModal(false); handleReset()}}>
        <Modal.Header>Brief Overview of Health Diary</Modal.Header>
        <Modal.Body>
            <Box sx={{ maxWidth: 400 }}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel
                                optional={
                                index === steps.length - 1 ? (
                                <Typography variant="caption">Last step</Typography>
                                ) : null
                            }
                            >
                                {step.label}
                            </StepLabel>
                            
                            <StepContent>
                                <Typography>{step.description}</Typography>
                                <Box sx={{ mb: 2 }}>
                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    sx={{ mt: 1, mr: 1 }}
                                >
                                {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                </Button>
                                <Button
                                    disabled={index === 0}
                                    onClick={handleBack}
                                    sx={{ mt: 1, mr: 1 }}
                                >
                                Back
                                </Button>
                            </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                    </Button>
                    </Paper>
                )}
                </Box>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => {setOpenAboutModal(false); handleReset()}}>Done</Button>          
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default About;

