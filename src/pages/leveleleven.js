import React from 'react';
import HeroCaseStudy from '../components/hero-case-study';
// images
import heroL11 from '../images/hero-l11.png';


const LevelElevenPage = () => (
  <div className="LevelEleven">
    <HeroCaseStudy
      brand="LevelEleven"
      blurb="LevelEleven is a sales technology company that creates enterprise software for sales people and managers that drives the behaviors that lead to more sales."
      featuredImageURL={heroL11}
      identifier="l11"
      jobTitle="Brand, Website & UI+UX Design"
    />
  </div>
)

export default LevelElevenPage;
