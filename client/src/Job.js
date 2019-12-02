import React from 'react';
import { Typography } from '@material-ui/core';



// component holds styling

export default function Jobs({job}) {
	return (
		<div className="job">
			<div>
				<Typography variant="h6">{job.title}</Typography>
				<Typography variant="h5">{job.company}</Typography>
				<Typography>{job.location}</Typography>
			</div>
			<div>
				<Typography>{job.created_at.split(' ').slice(0,3).join(' ')}</Typography>
			</div>	
		</div>
	)
}