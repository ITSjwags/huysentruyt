import React from 'react';
import PropTypes from 'prop-types';
// styles
import '../styles/logo-case-study.scss';


const LogoCaseStudy = ({ about, brand, identifier, logo }) => (
  <div className={`LogoCaseStudy LogoCaseStudy--${identifier}`}>
    <div className="LogoCaseStudy-left">
      <div className="LogoCaseStudy-about">
        <h3>The Logo</h3>
        <p>{about}</p>
      </div>
      <div className="LogoCaseStudy-logo">
        <img src={logo} alt={`${brand} logo`} />
      </div>
    </div>

    <div className="LogoCaseStudy-right"></div>
  </div>
)

LogoCaseStudy.propTypes = {
  about: PropTypes.string,
  brand: PropTypes.string,
  identifier: PropTypes.string,
  logo: PropTypes.string,
}

export default LogoCaseStudy;
