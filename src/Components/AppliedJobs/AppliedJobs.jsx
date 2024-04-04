import { useEffect, useState } from "react";
import { getDataFromLS } from "../../utiliti/LocalStorage";
import AppliedJob from "../AppliedJob/AppliedJob";
const AppliedJobs = () => {
    const [ jobs, setJobs ] = useState([]);
    const [displayJob, setDisplayJob] = useState([]);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then( data => setJobs(data));
    },[]);
    const storedAppliedJobs = getDataFromLS();
    const AppliedJobs = [];
    for(const id of storedAppliedJobs){
        const job = jobs.find(job => job.id === id);
        if(job){
            AppliedJobs.push(job);
        }
    }
    const handleFilter = filter =>{
        if( filter === 'all'){
            setDisplayJob(AppliedJobs);
        }
        else if(filter === 'remote'){
            setDisplayJob(AppliedJobs.filter(job => job.remote_or_onsite ==='Remote'));
        }
        else if(filter === 'onsite'){
            setDisplayJob(AppliedJobs.filter(job => job.remote_or_onsite ==='Onsite'));
        }
    }
    return (
        <div className="lg:w-7/12 mx-auto">
            <h1>Applied Jobs</h1>
            <h1>{AppliedJobs.length}</h1>
            <details className="dropdown w-full text-right">
                <summary className="m-1 btn">Filter</summary>
                <ul className="p-2 right-0 text-start cursor-pointer gap-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-32">
                    <li onClick={()=>handleFilter('all')}>All</li>
                    <li onClick={() => handleFilter('remote')}>Remote</li>
                    <li onClick={() => handleFilter('onsite')}>Onsite</li>
                </ul>
            </details>
            
            <div className="flex flex-col gap-5 mb-10">

                {
                    displayJob.length ? displayJob.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>) : AppliedJobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;