import React from 'react';
import AboutUsV2 from '../components/AboutUsV2';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TestimonialCountUp from '../components/TestimonialCountUp';

const About = () => {
    return (
        <>
            <Header />
            <Breadcrumb pageTitle="About Page" />
            <AboutUsV2 />
            {/* <TeamV2 /> */}
            <TestimonialCountUp />
            <Footer />
        </>
    );
};

export default About;