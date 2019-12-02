// contains all logic for view

import React from 'react';
import { Typography, MobileStepper, Button } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

// import children
import Job from './Job'

export default function Jobs({jobs}) {
	// put state in jobs because it is a view state rather than a database state. 
	const [activeStep, setActiveStep] = React.useState[0];

	function handleNext() {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	}
	function handleBack() {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	}


	return (
		<div className="job-list">
				<Typography variant="h4" component="h1">
					Find a job for software developers
				</Typography> 
				{jobs.map(
					job => <Job job={job} />
				)}
				<MobileStepper
					variant="progress"
					steps={numPages}
					position="static"
					activeStep={activeStep}
					nextButton={
						<Button size="small" onClick={handleNext} disabled={activeStep === numPages - 1}>
							Next
							<KeyboardArrowRight />
						</Button>
					}
					backButton={
						<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
							<KeyboardArrowLeft />
							Back
						</Button>
					}
				/>
		</div>
	)
}