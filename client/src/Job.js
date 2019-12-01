import React from 'react';



// component holds styling

export default function Jobs({job}) {
	return (
		<div className="job">
				{job.title}
				{job.company}
		</div>
	)
}