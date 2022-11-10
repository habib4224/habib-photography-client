import React from 'react';
import useTitle from '../../Hooks/useTitle';
import About from './About/About';
import Profile from './Profile/Profile';
import Services from './Services/Services';
import Slider from './Slider/Slider';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Slider></Slider>
            <Profile></Profile>
            <Services></Services>
            <About></About>

        </div>
    );
};

export default Home;