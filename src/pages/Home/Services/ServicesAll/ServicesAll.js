import React, { useEffect, useState } from 'react';
import useTitle from '../../../../Hooks/useTitle';
import ServiceGroup from '../ServiceGroup/ServiceGroup';

const ServicesAll = () => {
    const [servics, setServics] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServics(data))
    }, [])

    useTitle('Services')

    return (
        <div>
            <h1 className='text-5xl text-primary font-bold mb-4'>All Services :</h1>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5'>
                {
                    servics.map(servic => <ServiceGroup
                        key={servic._id}
                        servic={servic}
                    >
                    </ServiceGroup>)
                }
            </div>
        </div>
    );
};

export default ServicesAll;