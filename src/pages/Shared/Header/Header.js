import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import im1 from '../../../Images/logo.jpg';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }

    return (
        <div className="navbar bg-primary h-20 mb-16">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">

                        <li className='font-semibold'><Link to='/'>Home</Link></li>
                        <li className='font-semibold'><Link to='/blogs'>Blog</Link></li>
                        <li className='font-semibold'><Link to="/" className='btn btn-ghost normal-case '>Habib Photography</Link></li>
                        <div>
                            {
                                user?.email ?
                                    <> <li className='font-semibold'>
                                        <Link to='/serviceadd'><button className="btn btn-ghost">Add Services</button></Link>
                                    </li>

                                        <li className='font-semibold'>
                                            <Link to='/userreview'><button className="btn btn-ghost">Review</button></Link>
                                        </li>

                                        <li className='font-semibold'>
                                            <Link to='/userreview'><button onClick={handleLogOut} className="btn btn-ghost">Log Out</button></Link>
                                        </li>
                                    </>
                                    :
                                    <li className='font-semibold'><Link to='/login'><button className="btn btn-ghost">Log-In</button></Link></li>
                            }
                        </div>
                    </ul>
                </div >
                <img src={im1} alt="" className=' mask mask-squircle w-12 h-12' />
                <Link to="/" className='btn btn-ghost normal-case '> Habib Photography</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='font-semibold'><Link to='/'>Home</Link></li>
                    <li className='font-semibold'><Link to='/blogs'>Blog</Link></li>
                </ul>
                <div className=" menu menu-horizontal p-0 font-semibold">
                    {
                        user?.email ?
                            <>
                                <Link to='/serviceadd'>
                                    <button className="btn btn-ghost">Add Services</button>
                                </Link>
                                <Link to='/userreview'>
                                    <button className="btn btn-ghost">Reviw</button>
                                </Link>
                                <Link to='/userreview'>
                                    <button onClick={handleLogOut} className="btn btn-ghost">Log Out</button>
                                </Link>
                            </>
                            :
                            <Link to='/login'><button className="btn btn-ghost">Log In</button></Link>
                    }
                </div>
            </div>

        </div>
    );
};

export default Header;