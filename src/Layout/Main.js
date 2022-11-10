import React from 'react';
import { Outlet } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';

const Main = () => {
    useTitle('Home')
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;