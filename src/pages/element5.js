import React from 'react';
// components
import HeroCaseStudy from '../components/hero-case-study';
import LogoCaseStudy from '../components/logo-case-study';
// images
import heroE5 from '../images/hero-e5.png';
import logo from '../images/logo--e5.png';
// styles
import '../styles/about-case-study.scss';


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

    <div id={identifier} className={`AboutCaseStudy AboutCaseStudy--${identifier}`}>
      <p>Element5 specializes in creating award-winning, modern and sophisticated brands and websites for clients of all industries. Before the rebrand, they were named Core3 Solutions, after their three main service offerings: Web Development, Web Hosting, and IT services. After selling the IT portion of the business, Core3 Solutions now only had 2 main services. The name no longer made sense, thus a rebrand was necessary.</p>

      <p>As the lead designer on this project, I was responsible for a new name for the business, logo, website, icon set, and other brand collateral.</p>
    </div>

    <LogoCaseStudy
      about="For this brand, the logo needed to be versatile in order to fulfill 2 requirements. The mark could be used with text or as just the icon, and it needed to feel handcrafted. To achieve this, I illustrated a custom “5” with a lower case “e” shape, worked into the lower left area. I then encapsulated it in a rotated pentagon to look like an arrow and show forward movement."
      brand={brand}
      identifier={identifier}
      logo={logo}
    />

  </div>
)

export default Element5Page;
