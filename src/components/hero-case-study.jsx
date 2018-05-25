import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link as ScrollLink } from 'react-scroll';
// images
import arrow from '../images/arrow.png';
// styles
import '../styles/hero-case-study.scss';

class HeroCaseStudy extends Component {

  render() {
    const { brand, blurb, featuredImageURL, identifier, jobTitle } = this.props;

    return (
      <div className={`HeroCaseStudy HeroCaseStudy--${identifier}`}>
        <div className="HeroCaseStudy-content g-container">
          <div className="HeroCaseStudy-left">
            <h2>{brand}</h2>
            <p>{jobTitle}</p>
            <p className="HeroCaseStudy-divider"></p>
            <h4>{blurb}</h4>
          </div>

          <ScrollLink
            className="HeroCaseStudy-arrow"
            to={identifier}
            smooth={"easeInOutQuad"}
            duration={750}
            offset={-70}
          >
            <img src={arrow} alt="Scroll down for more content." />
          </ScrollLink>

          <div className="HeroCaseStudy-right">
            <img src={featuredImageURL} alt={`${brand} featured image`} />
          </div>
        </div>
      </div>
    )
  }
}

HeroCaseStudy.propTypes = {
  brand: PropTypes.string,
  blurb: PropTypes.string,
  featuredImageURL: PropTypes.string,
  identifier: PropTypes.string,
  jobTitle: PropTypes.string,
};

export default HeroCaseStudy;
