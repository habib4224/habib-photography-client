import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import useTitle from '../../Hooks/useTitle';


const Login = () => {
    const { login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    useTitle('Login')
    const from = location.state?.from?.pathname || '/';
    const handleLogin = event => {

        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

            })
            .catch(error => console.log(error));

    }
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="hero ">
            <div className="hero-content flex-col lg:flex-row">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
                    <h1 className="text-2xl font-bold text-center mt-3">* Sign Up *</h1>
                    <form onSubmit={handleLogin} className="card-body">
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
                            <label className="label">
                                <Link href="#" className="label-text-alt text-primary link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />

                        </div>
                    </form>
                    <p className='text-center pb-4'>Need an account? <Link className='text-primary' to='/registration'>Registration</Link></p>
                    <div>
                        <div>
                            <div className='text-center pb-4'>
                                <button onClick={handleGoogleSignIn} className="btn btn-primary btn-xs sm:btn-sm  md:btn-md lg:btn-lg"> Sign Up With  <FaGoogle className='text-white mx-2'></FaGoogle></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;