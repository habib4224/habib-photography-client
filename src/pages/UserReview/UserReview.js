import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import UserReviewRow from './UserReviewRow';
import useTitle from '../../Hooks/useTitle';

const UserReview = () => {
    const { user } = useContext(AuthContext);
    useTitle('User Review')
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete your review?');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const remaining = reviews.filter(odr => odr._id !== id);
                        toast('deleted successfully');
                        setReviews(remaining);
                    }
                })
        }
    }

    const handleUpdateStatus = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Edited' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(odr => odr._id !== id);
                    const approving = reviews.find(odr => odr._id === id);
                    approving.status = 'Updated'
                    const newReviews = [...remaining, approving];
                    setReviews(newReviews);
                }
            })
    }

    return (
        <div className='justify-center '>
            <h2 className="text-5xl font-bold text-center text-primary">Review: {reviews.length}</h2>

            {
                reviews.length < 1 ?
                    <h1 className='text-5xl text-primary'>No Reviews added. Add Review First! </h1>
                    :
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-1">


                        {
                            reviews.map(rev => <UserReviewRow
                                key={rev._id}
                                rev={rev}
                                handleDelete={handleDelete}
                                handleUpdateStatus={handleUpdateStatus}
                            ></UserReviewRow>)
                        }

                    </div>

            }


        </div>
    );
};

export default UserReview;