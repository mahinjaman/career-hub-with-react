import user from '../../../public/asset/images/user1.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={user} className=" max-w-xl rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-7xl font-bold my-3 leading-tight">One Step <br /> Closer To Your</h1>
                    <h1 className="text-7xl font-bold text-blue-500">Dream Job</h1>
                    <p className="py-6 md:w-8/12">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="primary_btn">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;