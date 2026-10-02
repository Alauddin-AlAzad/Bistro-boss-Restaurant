import React from 'react';
import Banner from '../Components/Banner';
import Slider from '../Components/Slider';
import BistroBossBanner from '../Components/BistroBossBanner';
import PopularMenu from '../Components/PopularMenu';
import Contact from '../Components/Contact';
import ChefRecomends from '../Components/ChefRecomends';
import Features from '../Components/Features';
import Testimonials from '../Components/Testimonials';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Banner />

            <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12 md:space-y-24">
                <Slider />
                <BistroBossBanner />
                <PopularMenu />
                <Contact />
                <ChefRecomends />
            </div>
            <Features />
            <Testimonials />
        </div>
    );
};

export default Home;