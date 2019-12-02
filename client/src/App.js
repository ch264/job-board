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

const JOB_API_URL = 'http://localhost:3001/jobs'

async function fetchJobs(updateCallback) {
  const res = await fetch(JOB_API_URL);
  let json = await res.json();

  updateCallback(json); 
  console.log(json)
};

function App() {
  const [jobsList, updateJobs] = React.useState([]); // when we use UseState hook, the second variable that we destrcucture from the useState hook, is a function, in which we can pass a argument that is the new value of our state for joblist. so we pass the new variable in fetchJobs(updateCallback) and set it directly in the function, we are setting the value of joblist to this json, which is an array of jobs. Now the jobs will be rendered on the frontend.

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
