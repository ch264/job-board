// manages worker tasks 

const fetchGithub = require('./tasks/fetch-github')

// run cron jobs by running node process
// to test run  node worker/index.js
var CronJob = require('cron').CronJob;
new CronJob('*/1 * * * * *', fetchGithub, null, true, 'America/Los_Angeles');