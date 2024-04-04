import React from 'react';
import { CiDollar } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
const AppliedJob = ({job}) => {
    const { id, logo, company_name, job_title, location, salary, remote_or_onsite, job_type } = job;
    return (
        <div className='flex gap-2 p-7 border border-gray-500 rounded-lg justify-between items-center'>
            <div className='flex gap-5'>
                <div className='flex justify-center items-center bg-gray-800 p-10 rounded-md'>
                    <img className='w-28 mb-4' src={logo} alt={company_name} />
                </div>
                <div>
                    <h2 className='text-2xl font-semibold mb-2'>{job_title}</h2>
                    <p className='mb-2 text-lg'>{company_name}</p>
                    <div className='flex gap-5 mb-4'>
                        <button className='border border-blue-500 py-2 px-5 rounded-md font-semibold text-blue-500'>{remote_or_onsite}</button>
                        <button className='border border-blue-500 py-2 px-5 rounded-md font-semibold text-blue-500'>{job_type}</button>
                    </div>
                    <div className='flex gap-5 mb-4'>
                        <p className='flex items-center'><IoLocationSharp className='mr-1 text-2xl' />{location}</p>
                        <p className='flex items-center'> <CiDollar className='mr-1 text-2xl' />Salary: {salary}</p>
                    </div>
                </div>
            </div>
            <div>
                <button className='primary_btn'><Link to={`/job/${id}`}>View Details</Link></button>
            </div>
        </div>
    );
};

export default AppliedJob;