import React from 'react';
import images1 from '../../../Images/Slider/2.jpg';
import images2 from '../../../Images/Slider/3.jpg';
import images3 from '../../../Images/Slider/1.jpg';
import './Slider.css';
const Slider = () => {
    return (
        <div className="carousel  w-full pb-16 ">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='carosel-img w-full h-full'><img src={images1} className="w-full" alt='' /></div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-2xl lg:text-6xl font-bold text-primary'>
                        Habib <br />
                        photgraphy
                    </h1>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4">
                    <button className="btn btn-primary mr-5">About Us</button>
                    <button className="btn btn-outline btn-primary">Service</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='carosel-img w-full h-full'><img src={images2} className="w-full" alt='' /></div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-2xl lg:text-6xl font-bold text white'>
                        Habib <br />
                        photgraphy
                    </h1>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4">
                    <button className="btn btn-primary mr-5">About Us</button>
                    <button className="btn btn-outline btn-primary">Service</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='carosel-img w-full h-full'><img src={images3} className="w-full" alt='' /></div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-2xl lg:text-6xl font-bold text white'>
                        Habib <br />
                        photgraphy
                    </h1>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4">
                    <button className="btn btn-primary mr-5">About Us</button>
                    <button className="btn btn-outline btn-primary">Service</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Slider;