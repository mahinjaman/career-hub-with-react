import { useLoaderData } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToLS } from '../../utiliti/LocalStorage';
const JobDetails = () => {
    const loaderData = useLoaderData();
    const currentId = useParams();
    
    const detailsJobs = loaderData.find(data => data.id === parseInt(currentId.id));
    const {id, salary, job_title, job_description, job_responsibility, educational_requirements, experiences ,contact_information } = detailsJobs;
    const handleApplyJob = () =>{
        addToLS(id)
        toast('Congratulations!!! Your Applied Job has been applied Successfully')
    }
    return (
        <div>
            <h1>Job Details Of:-</h1>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-10 lg:w-8/12 mx-auto'>
                <div className='md:col-span-2 lg:w-11/12 lg:col-span-3 flex flex-col gap-3'>
                    <p><span className='font-semibold text-white'>Job Description:</span> {job_description}</p>
                    <p><span className='font-semibold text-white'>Job Responsibility:</span> {job_responsibility}</p>
                    <p><span className='font-semibold text-white'>Educational Requirements:</span> <br /> {educational_requirements}</p>
                    <p><span className='font-semibold text-white'>Experience:</span> <br /> {experiences}</p>
                </div>
                <div className='p-5 flex flex-col gap-3 bg-slate-700 rounded-md'>
                    <h1 className='border-b py-2 font-semibold text-slate-300'>Job Details</h1>
                    <p><span>Salary:</span> {`${salary} (Per Month)`}</p>
                    <p><span>Job Title:</span> {job_title}</p>
                    <h1 className='border-b py-2 font-semibold text-slate-300'>Contact Information</h1>
                    <p><span className='font-semibold text-slate-300'>Phone:</span> {contact_information.phone}</p>
                    <p><span className='font-semibold text-slate-300'>Email:</span> {contact_information.email}</p>
                    <p><span className='font-semibold text-slate-300'>Address:</span> {contact_information.address}</p>
                    <button className='primary_btn' onClick={handleApplyJob}>Apply Now</button>
                    <ToastContainer></ToastContainer>
                </div>
                
            </div>
        </div>
    );
};

export default JobDetails;