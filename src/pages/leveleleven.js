import React from 'react';
// components
import HeroCaseStudy from '../components/hero-case-study';
// images
import heroL11 from '../images/hero-l11.png';
// styles
import '../styles/about-case-study.scss';


const brand = "LevelEleven";
const identifier = "l11";

const LevelElevenPage = () => (
  <div className={brand}>
    <HeroCaseStudy
      brand={brand}
      blurb="LevelEleven is a sales technology company that creates enterprise software for sales people and managers that drives the behaviors that lead to more sales."
      featuredImageURL={heroL11}
      identifier={identifier}
      jobTitle="Brand, Website & UI+UX Design"
    />

    <div id={identifier} className={`AboutCaseStudy AboutCaseStudy--${identifier}`}>
      <h3>The Website</h3>

      <p>One of the first things that I noticed while working with LevelEleven was their need for an updated website design. Not only did the design need to be improved, but the site needed a complete content overhaul in order to be much more informative and inclusive of the company’s digital products. I led this process from start to finish, establishing a comprehensive site structure, working with content writers for copy, designing each page of the site, and handing off to an outsourced web development company.</p>
    </div>
  </div>
)

export default LevelElevenPage;
