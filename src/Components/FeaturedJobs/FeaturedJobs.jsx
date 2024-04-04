import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
import { Link } from "react-router-dom";

const FeaturedJobs = () => {

    const [featureJobs, setFeaturedJobs ] = useState([]);
    const [dataLength , setDataLength] = useState(4);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
            .then(data => setFeaturedJobs(data))
    },[]);
    const handleShowAllJobs = () =>{
        setDataLength(featureJobs.length)
    }
    return (
        <div className="flex flex-col items-center gap-4 mb-32">
            <h1 className="text-4xl font-bold mb-7">Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 p-5 gap-5 md:grid-cols-2 justify-evenly md:w-8/12'>
                {
                    featureJobs.slice(0, dataLength).map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
                }
            </div>
            <div className={dataLength === featureJobs.length && 'hidden'}>
                <button onClick={handleShowAllJobs} className='primary_btn' >See All Jobs</button>

            </div>
        </div>
    );
};

export default FeaturedJobs;