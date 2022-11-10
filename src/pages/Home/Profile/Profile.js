import React from 'react';
import ProfilePic from '../../../Images/Profile/profile1.jpg'

const Profile = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold'>About Author:</h1>
            <div className=" bg-base-200 shadow-xl my-6 lg:flex ">


                <div className="w-1/2 ">
                    <h2 className=" text-start text-xl p-4"><strong>Habib</strong>  is an internationally acclaimed photographer, filmmaker, YouTube creator and entrepreneur based in Toronto, Canada. Habib uses his platforms to inspire and help people pursue their passions behind the lens. In 2019 he was named Breakout YouTuber of the Year at the Shorty Awards and in 2020 received a Streamy for Cinematographer of the Year. Habibs work can be found in a number of outlets but a notable personal achievement for this Canadian was having his work featured on two special collection coins issued by the Royal Canadian Mint.</h2>
                </div>
                <div className='w-1/2 ml-20'><figure><img src={ProfilePic} alt="Album" /></figure></div>
            </div></div>
    );
};

export default Profile;