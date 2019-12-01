import React from 'react';
import './App.css';
import Jobs from './Jobs'
// hold state

// mock json that we might return from out API
const mockJobs = [
  {title: 'SWE 1', company: 'Google'},
  {title: 'SWE 1', company: 'Apple'},
  {title: 'SWE 1', company: 'Twitter'}
]

function App() {
  return (
    <div className="App">
      <Jobs jobs={mockJobs} />
    </div>
  );
}

export default App;
