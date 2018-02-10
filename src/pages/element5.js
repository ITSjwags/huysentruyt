import React from 'react';
import HeroCaseStudy from '../components/hero-case-study';
// images
import heroE5 from '../images/hero-e5.png';


const Element5Page = () => (
  <div className="Element5">
    <HeroCaseStudy
      brand="Element5"
      blurb="Element5 is a marketing and web development agency that creates and maintains websites and branding for businesses of all sizes."
      featuredImageURL={heroE5}
      identifier="e5"
      jobTitle="Agency Rebrand"
    />
  </div>
)

export default Element5Page;
