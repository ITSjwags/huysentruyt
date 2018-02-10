import React from 'react';
import HeroCaseStudy from '../components/hero-case-study';
// images
import heroRP from '../images/hero-rp.png';


const RocketpostPage = () => (
  <div className="Rocketpost">
    <HeroCaseStudy
      brand="RocketPost"
      blurb="RocketPost is a web app that allows users to automate job board posts, schedule posts in advance, and learn from job post performance data."
      featuredImageURL={heroRP}
      identifier="rp"
      jobTitle="Creative Direction & UI+UX Design"
    />
  </div>
)

export default RocketpostPage;
