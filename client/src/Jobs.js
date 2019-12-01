import React from 'react';
// import Typography from '@material-ui/core/Typography';
import { Typography } from '@material-ui/core';

// import children
import Job from './Job'

// component holds styling

export default function Jobs({jobs}) {
	return (
		<div className="job-list">
				<Typography variant="h1">
					Find a job for software developers
				</Typography> 
				{jobs.map(
					job => <Job job={job} />
				)}
		</div>
	)
}