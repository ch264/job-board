import React from 'react';
import './App.css';
import Jobs from './Jobs'
// hold state

// mock json that we might return from out API
// const mockJobs = [
//   {title: 'SWE 1', company: 'Google'},
//   {title: 'SWE 1', company: 'Apple'},
//   {title: 'SWE 1', company: 'Twitter'}
// ]

const JOB_API_URL = 'curl http://localhost:3001/jobs'

async function fetchJobs() {
  const res = await fetch(JOB_API_URL);
  const json = await res.json();

  console.log(json)
}

function App() {
  const [jobsList, updateJobs] = React.useState([]);

  React.useEffect(() => {
    fetchJobs(updateJobs);
  }, []) // second argument watches hooks, if empty, acts as componentdidmount()

  return (
    <div className="App">
      <Jobs jobs={jobsList} />
    </div>
  );
}

export default App;
