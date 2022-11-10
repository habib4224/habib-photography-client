import React, { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import { FaGoogle } from "react-icons/fa";


const Registration = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { creatUser } = useContext(AuthContext)
    const from = location.state?.from?.pathname || '/';
    useTitle('Registration')
    const handleReg = event => {

        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        creatUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error));

    }

    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                Navigate(from, { replace: true })
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
                    <h1 className="text-2xl font-bold text-center mt-3 text-primary ">* Registration *</h1>
                    <form onSubmit={handleReg} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-primary">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-primary">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-primary">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Registration" />

                        </div>
                    </form>
                    <p className='text-center  pb-4'>Have an account? <Link className='text-primary' to='/login'>Sign Up</Link></p>
                    <div>
                        <div className='text-center pb-4'>
                            <button onClick={handleGoogleSignIn} className="btn btn-primary btn-xs sm:btn-sm  md:btn-md  lg:btn-lg"> Sign Up With  <FaGoogle className='text-white mx-2'></FaGoogle></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Registration;