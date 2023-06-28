import React from 'react';
// import './App.css';
import Header from './components/Header';
import JobListings from './components/JobListings';
import Filters from './components/Filters';
import JobDetails from './components/JobDetails';
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (  
    <Router>
      <div className="container">
      <Routes>
      <Route exact path="/" element={<Header />} />
      <Route exact path="/joblistings" element={<JobListings />} />
      <Route path="/filters" element={<Filters />} />
      <Route path="/jobDetails/:id" element={<JobDetails />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
      </Router>
  );
}

export default App;
