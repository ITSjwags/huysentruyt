import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link as ScrollLink } from 'react-scroll';
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
