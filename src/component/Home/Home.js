import React, { useEffect } from "react";
import Article from "./Article/Article";
import HeroSection from "./HeroSection/HeroSection";
import JoinNowCard from "./JoinNowCard/JoinNowCard";
import Recommended from "./Recommended/Recommended";
import Testimonial from "./Testimonial/Testimonial";
import TopFeatures from "./TopFeatures/TopFeatures";
import GoToTop from "../../ScrollToTop";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="main">
        <GoToTop />
        <HeroSection />
        <TopFeatures />
        <Recommended />
      </div>
      <Testimonial />
      <Article />
      <JoinNowCard />
    </>
  );
};

export default Home;
