import { Stepper, Step, StepLabel } from '@mui/material';

/**
 * A component for the Progress Bar which can be imported to all the lesson pages
 * The component has been imported from Material UI and customized in order to align
 * with the Figma Prototype
 */

// A list with the steps in the progress bar, which is set to have 3 steps in total
const steps = [0, 1, 2];

// Value that a page needs to send to Progress Bar
type ProgressBarProps = {
  activeStep: number;
};

export default function ProgressBar({ activeStep }: ProgressBarProps) {
  return (
    <Stepper
      activeStep={activeStep}
      sx={{
        width: 400,

        // Hides the default number inside each circle
        '& .MuiStepIcon-text': {
          display: 'none',
        },

        '& .MuiStepIcon-root': {
          color: 'primary.main',
          fontSize: 32,
        },

        '& .MuiStepIcon-root.Mui-completed': {
          color: 'success.main',
        },

        // Styles the line between two steps
        '& .MuiStepConnector-line': {
          borderColor: 'primary.main',
          borderTopWidth: 2,
        },
        // Styles a line a different color when a step is active or complete
        '& .MuiStepConnector-root.Mui-active .MuiStepConnector-line, & .MuiStepConnector-root.Mui-completed .MuiStepConnector-line':
          {
            borderColor: 'success.main',
            borderTopWidth: 2,
          },
      }}
    >
      {steps.map((step) => (
        <Step key={step}>
          <StepLabel />
        </Step>
      ))}
    </Stepper>
  );
}
