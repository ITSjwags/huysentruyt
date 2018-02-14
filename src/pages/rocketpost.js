import React from 'react';
// components
import HeroCaseStudy from '../components/hero-case-study';
import LogoCaseStudy from '../components/logo-case-study';
// images
import heroRP from '../images/hero-rp.png';
import logo from '../images/logo--rp.png';
// styles
import '../styles/about-case-study.scss';


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

    <div id={identifier} className={`AboutCaseStudy AboutCaseStudy--${identifier}`}>
      <p>There are many job posting boards around the internet. Each one often entails a manual and highly laborious posting process. For people such a recruiters, who are posting a lot of jobs, this can be a terrible task. RocketPost was created for these people- a simple solution to a large problem.</p>

      <p>As Creative Director for this project, I led a team in developing the name and logo for the application. We built out a feature list, created initial page structure and user flows, and worked on perfecting the interface and user experience.</p>
    </div>

    <LogoCaseStudy
      about="We wanted a brand and logo that would reflect a space theme while maintaining a sense of professionalism. To do this, we chose this deep purple/blue color scheme and created a custom NASA-inspired lettering for the “RP.” Angles were utilized to give a sense of movement, as we wanted this brand to evoke the fast-paced vision of the app."
      brand={brand}
      identifier={identifier}
      logo={logo}
    />

  </div>
)

export default RocketpostPage;
