import React, { useEffect, useState } from "react";
import axios from "axios";
import "./JobListings.css";

const JobListigs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        axios.get("https://api.indeed.com/jobs?q=&l=&sort=dateposted&start=0&limit=10")
            .then(response => {
                setJobs(response.data);
            })
            .catch(error => {
                console.log(error.message);
        })
    }, [])
    return (
        <div className="joblistings">
            <h1>Latest Jobs</h1>
            {jobs.map(job => (
                <div key={job.id}>
                    <h2>{job.details}</h2>
                    {/* <p>{job.company}</p>
                    <p>{job.location}</p> */}

                </div>
            ))}

        </div>
    )   
} 
export default JobListigs;
