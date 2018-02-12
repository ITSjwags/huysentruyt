import React from 'react';
import HeroCaseStudy from '../components/hero-case-study';
// images
import heroGB from '../images/hero-gb.png';


const brand = "Gentleman's Box";
const identifier = "gb";

const GentlemansBoxPage = () => (
  <div className="GentlemansBox">
    <HeroCaseStudy
      brand={brand}
      blurb="Gentleman's Box is a themed, monthly subscription box service that sends style and grooming accessories to the savvy man."
      featuredImageURL={heroGB}
      identifier={identifier}
      jobTitle="Brand & Package Design"
    />

    <div className={`AboutCaseStudy AboutCaseStudy--${identifier}`}>
      <p>With the monthly subscription box industry booming, the founders of Gentleman’s Box saw an opportunity to create the premier monthly box, curated for the stylish man. This startup had massive potential and just needed help getting off the ground with branding and package design.</p>

      <p>The company logo, package design, website and marketing materials I developed gave them a look that appealed to their target audience.</p>
    </div>

  </div>
)

export default GentlemansBoxPage;
