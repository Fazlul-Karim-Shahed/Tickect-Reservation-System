import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import TravelDetails from './TravelDetails';
import PassengerInfo from './PassengerInfo';
import Payment from './Payment';
import Details from './Details';
import ClassInfo from './ClassInfo';

const steps = ['Travel Details', 'Choose Class', 'Passenger Info', 'Payment'];

export default function Ticket() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());


  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const handleReset = () => {
    setActiveStep(0);
  };






  return (
    <div className='container py-5'>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {activeStep === steps.length ? (
          <React.Fragment>
            <div className='pt-5'>{<Details />}</div>

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className='pt-5'>
              {activeStep + 1 === 1 ? <TravelDetails /> : ''}
              {activeStep + 1 === 2 ? <ClassInfo /> : ''}
              {activeStep + 1 === 3 ? <PassengerInfo /> : ''}
              {activeStep + 1 === 4 ? <Payment /> : ''}
            </div>

            <div className='pt-5'>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                  variant="outlined"
                >
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />

                <Button variant="outlined" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Box>
            </div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
