import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceGroup from './ServiceGroup/ServiceGroup';

const Services = () => {

    const [servics, setServics] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServics(data))

    }, [])
    return (
        <div>
            <h1 className='text-5xl text-primary font-bold mb-4'>Services :</h1>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {
                    servics.map(servic => <ServiceGroup
                        key={servic._id}
                        servic={servic}
                    ></ServiceGroup>)
                }
                <Link to='/servicesall'><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg ">See All Services</button></Link>
            </div>
        </div>

    );
};

export default Services;