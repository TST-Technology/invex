import React from 'react'
import Article from './Article/Article'
import HeroSection from './HeroSection/HeroSection'
import JoinNowCard from './JoinNowCard/JoinNowCard'
import Recommended from './Recommended/Recommended'
import Testimonial from './Testimonial/Testimonial'
import TopFeatures from './TopFeatures/TopFeatures'

const Home = () => {
    return (
        <>
            <div className="main">
                <HeroSection />
                <TopFeatures />
                <Recommended />
            </div>
            <Testimonial />
            <Article />
            <JoinNowCard />
        </>
    )
}

export default Home
