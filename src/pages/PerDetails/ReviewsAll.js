import React from 'react';
import { FaUser } from "react-icons/fa";

const ReviewsAll = ({ reviwsa }) => {


    const { photo, email, review, uname } = reviwsa;


    return (
        <div className="card w-full bg-base-200 shadow-xl my-4">
            <div className="card-body">
                <div className='flex  justify-between '>
                    {
                        photo ?
                            <img src={photo} alt="" /> : <FaUser></FaUser>
                    }

                    <div className='p-4'>
                        <p className='text-primary'> {uname}</p>
                        <p >{email}</p>
                    </div>
                </div>


                <div className="card-actions justify-end mt-4 ">
                    <p className='break-all '><strong>Review:</strong> {review}</p>

                </div>
            </div>
        </div>
    );
};

export default ReviewsAll;