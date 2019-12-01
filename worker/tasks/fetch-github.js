// backend node fetch request (same a client side)
var fetch = require('node-fetch');


const baseURL = 'https://jobs.github.com/positions.json?page=1'

async function fetchGithub() {

	let resultCount = 1, onPage = 0;
	// hold results from api
	const allJobs = [];

	// loop through all the job pages on github jobs page
	while(resultCount > 0 ) {
	const res = await fetch(`${baseURL}?page=${onPage}`);
	const jobs = await res.json();
	// dump array res in another array to keep it flat
	allJobs.push(...jobs);
	resultCount = jobs.length;
		console.log('got', resultCount, 'jobs')
	onPage++
	}
	console.log('got', allJobs.length, 'jobs total')
}

fetchGithub();

module.exports = fetchGithub;

