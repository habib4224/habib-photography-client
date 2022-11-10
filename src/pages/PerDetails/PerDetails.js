import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ReviewsAll from './ReviewsAll';
import useTitle from '../../Hooks/useTitle';

const PerDetails = () => {

    const { description, _id, name, price, photo_url } = useLoaderData();

    const { user } = useContext(AuthContext);
    useTitle('PerDetailes')

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const uname = form.uname.value;

        const reviews = {
            service: _id,
            name: name,
            email: email,
            review: review,
            photo: photo,
            uname: uname


        }


        fetch('https://habib-photography-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review added successfully');
                    form.reset();

                }
            }

            )
            .catch(error => console.error(error));
    }

    const [reviwsall, setReviwsall] = useState([]);
    useEffect(() => {

        fetch('https://habib-photography-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviwsall(data))

    }, [])

    return (
        <div>
            <div className="card w-full bg-base-200 shadow-xl">

                <div >
                    <figure><PhotoProvider speed={() => 800}
                        easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}>
                        <PhotoView src={photo_url}>
                            <img className='h-72' src={photo_url} alt="Shoes" />
                        </PhotoView>
                    </PhotoProvider></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-primary">{name}</h2>
                    <p>{description}</p>

                    <div className="card-actions justify-end mt-4">
                        <p>Price: ${price}</p>
                    </div>
                </div>
            </div>

            <div className='my-6 bg-base-200 border-2'>
                <h1 className='text-center font-bold text-4xl text-primary'>All Review :</h1>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                    {

                        reviwsall.map(reviwsa => <ReviewsAll
                            key={reviwsa._id}
                            reviwsa={reviwsa}
                        >

                        </ReviewsAll>)

                    }
                </div>
            </div>
            <div className='my-6 bg-base-200 border-2'>
                <h1 className='text-primary  text-center font-bold text-4xl'>Add Review :</h1>
                <form onSubmit={handleReview}>
                    <div><input name="review" type="text" placeholder="Add a review" className="h-24 input input-bordered w-full my-2" />
                    </div>
                    <div>
                        <input name="email" type="text" placeholder="Mail" defaultValue={user?.email} className=" input input-bordered w-full mb-2" readOnly />
                        <input name="photo" type="text" placeholder="photo" defaultValue={user?.photoURL} className=" input input-bordered w-full mb-2 hidden" />
                        <input name="uname" type="text" placeholder="name" defaultValue={user?.displayName} className=" input input-bordered w-full mb-2 hidden" />
                    </div>
                    <input className='btn btn-primary w-full  my-4' type="Submit" defaultValue='Add Review' />

                </form>
            </div>
        </div>
    );
};

export default PerDetails;