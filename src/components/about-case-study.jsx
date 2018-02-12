import React, { Component } from 'react';
import PropTypes from 'prop-types';
// styles
import '../styles/about-case-study.scss';


class AboutCaseStudy extends Component {

  render() {
    const { bio, brand } = this.props;

    return (
      <p className={`AboutCaseStudy AboutCaseStudy--${brand}`}>
        {bio}
      </p>
    );
  }
}

AboutCaseStudy.propTypes = {
  bio: PropTypes.string,
  brand: PropTypes.string,
};

export default AboutCaseStudy;
