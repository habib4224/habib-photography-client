import React, { useContext } from 'react';
import { FaUser } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const UserReviewRow = ({ rev, handleDelete, handleUpdateStatus }) => {
    const { user } = useContext(AuthContext);

    const { name, _id, status, email, review } = rev;

    return (
        <div>
            <div className="card w-full bg-base-200 shadow-xl ">

                <div className="card-body ">
                    <h2 className="card-title">Project: {name}</h2>
                    <p className='break-all'><strong>Review:</strong> {review}...</p>
                    <p><strong>User Email:</strong> {email}</p>

                    <div className="card-actions justify-between mt-4">
                        <div className="avatar">
                            <div className="mask mask-squircle w-11 h-11">
                                {
                                    user?.photoURL ?
                                        <img src={user?.photoURL} alt="" /> : <FaUser></FaUser>
                                }

                            </div>
                        </div>

                        <button
                            onClick={() => handleUpdateStatus(_id)}
                            className="btn btn-ghost btn-square">{status ? status : ' Edit'}
                        </button>
                        <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>


                    </div>
                </div>
            </div>


        </div>
    );
};

export default UserReviewRow;