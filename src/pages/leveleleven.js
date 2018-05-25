import React from 'react';
// components
import HeroCaseStudy from '../components/hero-case-study';
// images
import heroL11 from '../images/hero-l11.png';
import mocksImage from '../images/mocks-l11.png';
import scorecardImage from '../images/l11-product-sc.png';
import scorecardIcon from '../images/l11-icon-sc.png';
// styles
import '../styles/about-case-study.scss';
import '../styles/leveleleven.scss';


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

    <div className="LevelEleven-brand">
      <div className="LevelEleven-blurb LevelEleven-blurb--brand">
        <h3>The Brand</h3>
        <p>The updated look and feel that I created with the new site was the first step in establishing a new, modern brand for the company. From there, I created a detailed 80-page brand guide for internal use at LevelEleven. It outlined everything from logos, icons, colors, and fonts, to company history, brand voice, and the company tagline.</p>
      </div>

      <img className="LevelEleven-mocks" src={mocksImage} alt={`${brand} app images`} />
    </div>

    <div className="LevelEleven-product">
      <div className="LevelEleven-blurb LevelEleven-blurb--product">
        <h3>The Product</h3>
        <p>LevelEleven has three main products that can work seperately, but work best when used together. They are all meant for modern sales organizations who want to push the boundaries of what possible for them to accomplish. As the only UI/UX designer on the team, I was responsible for redesigning and adding features to create a delightful and easy to use suite of products.</p>
      </div>

      <div className="LevelEleven-productFeature">
        <div className="LevelEleven-productFeature-content g-container">
          <div className="LevelEleven-productFeature-left">
            <img className="LevelEleven-productIcon" src={scorecardIcon} alt={`${brand} scorecard icon`} />
            <h3>Scorecard</h3>
            <p>Scorecard is a fully responsive app used by sales people to track progress towards their goals on key metrics. I completely overhauled the design to create a much more user-friendly experience. With a very simple-to-use interface and comprehensive graphs, it’s easy for the sales person to see where they are doing well and where they need to improve.</p>
          </div>

          <div className="LevelEleven-productFeature-right">
            <img className="LevelEleven-productImage" src={scorecardImage} alt={`${brand} scorecard app images`} />
          </div>
        </div>
      </div>
    </div>

  </div>
)

export default LevelElevenPage;
