// express. 
// run node/api/inex.js to test
// run curl http://localhost:3001/jobs - to see response


const express = require('express')
const app = express()
const port = 3001 // frontend is running at 3000 so change

app.get('/jobs', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))