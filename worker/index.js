// manages worker tasks 


// run cron jobs by running node process
// to test run  node worker/index.js
var CronJob = require('cron').CronJob;
new CronJob('* * * * * *', function() {
  console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');