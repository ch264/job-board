// backend node fetch request (same a client side)
var fetch = require('node-fetch');

var redis = require("redis"), client = redis.createClient();
// converting a get to a promise 
const {promisify} = require('util');
// const getAsync = promisify(client.get).bind(client);
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

	// set in redis
	const success = await setAsync('github', JSON.stringify(allJobs));
	
	console.log({success})
}

// fetchGithub();

module.exports = fetchGithub;

