import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import useTitle from '../Hooks/useTitle';


const AddService = () => {
    const { user } = useContext(AuthContext);
    useTitle('AddServices');

    const handleAddServices = event => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email || "unregistered";
        const servicename = form.name.value;
        const price = form.price.value;
        const description = form.description.value;
        console.log(email, servicename, description);

        const service = {

            name: servicename,
            price,
            description
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Service added successfully')
                    form.reset();

                }
            })
            .catch(err => console.error(err))

    }

    return (
        <div className='bg-base-200 shadow-xl my-6'>
            <h2 className='text-5xl text-center my-5 text-primary font-bold'>Add your Services:</h2>
            <form onSubmit={handleAddServices}>
                <div className='grid grid-cols-1 lg:grid-cols-1 gap-4'>

                    <input name='email' type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full input-bordered" readOnly />
                    <div className='flex gap-2 mb-2' >
                        <input name='name' type="text" placeholder="Your service name" className="input input-ghost w-1/2  input-bordered" required />
                        <input name='price' type="text" placeholder="Service price" className="input w-1/2 input-ghost  input-bordered" />
                    </div>
                </div>
                <textarea name='description' className="textarea textarea-bordered h-24 w-full" placeholder="Your Service Details" required></textarea>

                <input className='btn btn-primary w-full' type="submit" value="Add Service" />
            </form>

        </div>
    );
};

export default AddService;