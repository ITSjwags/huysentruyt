import React from 'react';
import HeroCaseStudy from '../components/hero-case-study';
// images
import heroGB from '../images/hero-gb.png';


const GentlemansBoxPage = () => (
  <div className="GentlemansBox">
    <HeroCaseStudy
      brand="Gentleman's Box"
      blurb="Gentleman's Box is a themed, monthly subscription box service that sends style and grooming accessories to the savvy man."
      featuredImageURL={heroGB}
      identifier="gb"
      jobTitle="Brand & Package Design"
    />
  </div>
)

export default GentlemansBoxPage;
