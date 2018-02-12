import React from 'react';
import HeroCaseStudy from '../components/hero-case-study';
// images
import heroE5 from '../images/hero-e5.png';


const brand = "Element5";
const identifier = "e5";

const Element5Page = () => (
  <div className={brand}>
    <HeroCaseStudy
      brand={brand}
      blurb="Element5 is a marketing and web development agency that creates and maintains websites and branding for businesses of all sizes."
      featuredImageURL={heroE5}
      identifier={identifier}
      jobTitle="Agency Rebrand"
    />

    <div className={`AboutCaseStudy AboutCaseStudy--${identifier}`}>
      <p>Element5 specializes in creating award-winning, modern and sophisticated brands and websites for clients of all industries. Before the rebrand, they were named Core3 Solutions, after their three main service offerings: Web Development, Web Hosting, and IT services. After selling the IT portion of the business, Core3 Solutions now only had 2 main services. The name no longer made sense, thus a rebrand was necessary.</p>

      <p>As the lead designer on this project, I was responsible for a new name for the business, logo, website, icon set, and other brand collateral.</p>
    </div>

  </div>
)

export default Element5Page;
