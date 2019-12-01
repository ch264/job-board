// backend node fetch request (same a client side)
var fetch = require('node-fetch');

var redis = require("redis"), client = redis.createClient();
// converting a get to a promise 
const {promisify} = require('util');
const setAsync = promisify(client.set).bind(client);

const baseURL = 'https://jobs.github.com/positions.json'



async function fetchGithub() {
	console.log('fetching github')

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


	// filter response to only keys that we want
	const jrJobs = allJobs.filter(job => {
		const jobTitle = job.title.toLowerCase();

		if (
			jobTitle.includes('senior') || 
			jobTitle.includes('manager') || 
			jobTitle.includes('sr.') || 
			jobTitle.includes('architect')
		) {
			return false;
		}
		return true;
	});
	console.log('filtered jobs', jrJobs.length )

	// set response in redis under 'github'. To call in redis type: 'get github' in terminal
	const success = await setAsync('github', JSON.stringify(allJobs));
	
	console.log({success})
}

// fetchGithub();

module.exports = fetchGithub;

