import { useEffect, useState } from "react";
import JobCategory from "../../JobCategory/JobCategory";

const JobCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="flex flex-col items-center gap-4 mb-32">
            <h1 className="text-4xl font-bold mb-7">Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-1 p-5 gap-5 md:grid-cols-2 lg:grid-cols-4 justify-evenly md:w-10/12'>
                {
                    categories.map(category => <JobCategory key={category.id} job={category}></JobCategory> )
                }
            </div>
        </div>
    );
};

export default JobCategories;