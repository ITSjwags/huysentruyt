import React from 'react';
// components
import HeroCaseStudy from '../components/hero-case-study';
import LogoCaseStudy from '../components/logo-case-study';
// images
import heroGB from '../images/hero-gb.png';
import logo from '../images/logo--gb.png';
// styles
import '../styles/about-case-study.scss';


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

    <div id={identifier} className={`AboutCaseStudy AboutCaseStudy--${identifier}`}>
      <p>With the monthly subscription box industry booming, the founders of Gentleman’s Box saw an opportunity to create the premier monthly box, curated for the stylish man. This startup had massive potential and just needed help getting off the ground with branding and package design.</p>

      <p>The company logo, package design, website and marketing materials I developed gave them a look that appealed to their target audience.</p>
    </div>

    <LogoCaseStudy
      about="The client wanted a brand that would evoke the sophistication of the modern gentleman, while having a classic feel. To do this, I designed a mark that was inspired by a wax seal or badge that is timeless and very unique."
      brand={brand}
      identifier={identifier}
      logo={logo}
    />

  </div>
)

export default GentlemansBoxPage;
