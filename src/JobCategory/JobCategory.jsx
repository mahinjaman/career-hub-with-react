import PropTypes from 'prop-types'
const JobCategory = ({job}) => {
    const { logo, category_name, availability } = job;
    return (
        <div className='flex gap-2 flex-col items-start p-5 bg-base-200 rounded-md'>
            <img className='bg-base-100 p-4 rounded-md' src={logo} alt={category_name} />
            <h1 className='font-semibold text-2xl'>{category_name}</h1>
            <p>{availability} Jobs Available</p>
        </div>
    );
};

JobCategory.propTypes = {
    job: PropTypes.object.isRequired,
}

export default JobCategory;