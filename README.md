# job-board

## Techstack

### Frontend
* React - with create-react-app
* Material UI API https://material-ui.com/getting-started/installation/
* Express.js https://expressjs.com/en/starter/hello-world.html

### API
* GitHub Jobs API 
* Node fetch API

### worker
* CRON https://www.npmjs.com/package/cron

### backend
* Redis to store data 
* node client to access redis https://github.com/NodeRedis/node_redis


## How to run the app: 
in root run
```bash
redis server
```

to run the server on localhost 3001:
```bash
node tasks/index.js
```

to run the frontend on localhost 3000:
```bash
cd client
yarn start
```
