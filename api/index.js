// express. 
// run node/api/inex.js to test
// run curl http://localhost:3001/jobs - to see response


const express = require('express')
const app = express()
const port = 3001 // frontend is running at 3000 so change

// include redis instance
var redis = require("redis"), client = redis.createClient();
// converting a get to a promise 
const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);



// convert route to async function
app.get('/jobs', async (req, res) => {
	const jobs = await getAsync('github');
	res.header("Access-Control-Allow-Headers", "http://localhost:3000") // allow CORS
	return res.send(jobs)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))