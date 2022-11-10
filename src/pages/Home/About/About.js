import React from 'react';
import aboutimg from '../../../Images/about/about.jpg'
const About = () => {
    return (
        <div className=" shadow-xl my-6 flex">
            <div className='p-6'><img src={aboutimg} alt="Album" /></div>
            <div className="justify-center mx-6 my-20">
                <h2 className=" text-center">Newsletter </h2>
                <p>Submit Your Email Address</p>

                <div className=" flex gap-3">
                    <input name='name' type="email" placeholder="Your email address" className="input input-ghost w-2/3  input-bordered" required />
                    <button className="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default About;