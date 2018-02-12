import React from 'react';
// components
import AboutCaseStudy from '../components/about-case-study';
import HeroCaseStudy from '../components/hero-case-study';
// images
import heroRP from '../images/hero-rp.png';


const brand = "Rocketpost";
const identifier = "rp";

const RocketpostPage = () => (
  <div className={brand}>
    <HeroCaseStudy
      brand={brand}
      blurb="RocketPost is a web app that allows users to automate job board posts, schedule posts in advance, and learn from job post performance data."
      featuredImageURL={heroRP}
      identifier={identifier}
      jobTitle="Creative Direction & UI+UX Design"
    />

    <div className={`AboutCaseStudy AboutCaseStudy--${identifier}`}>
      <p>There are many job posting boards around the internet. Each one often entails a manual and highly laborious posting process. For people such a recruiters, who are posting a lot of jobs, this can be a terrible task. RocketPost was created for these people- a simple solution to a large problem.</p>

      <p>As Creative Director for this project, I led a team in developing the name and logo for the application. We built out a feature list, created initial page structure and user flows, and worked on perfecting the interface and user experience.</p>
    </div>

  </div>
)

export default RocketpostPage;
