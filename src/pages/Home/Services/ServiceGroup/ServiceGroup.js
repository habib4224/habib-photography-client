import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServiceGroup = ({ servic }) => {

    const { photo_url, name, price, _id, description, } = servic;

    return (
        <div className="card w-96 bg-base-200 shadow-xl">
            <div >

                <PhotoProvider speed={() => 800}
                    easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}>
                    <PhotoView src={photo_url}>
                        <img className='h-72' src={photo_url} alt="Shoes" />
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div className="card-body">
                <h2 className="card-title text-primary">{name}</h2>
                <p>{description.slice(0, 300)}...</p>

                <div className="card-actions justify-end mt-4">
                    <p><strong className='text-primary'>Price: $</strong>{price}</p>
                    <Link to={`/perdetails/${_id}`}><button className="btn btn-primary">Details Service</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceGroup;