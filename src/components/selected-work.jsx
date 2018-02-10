import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
// images
import arrow from '../images/arrow-horiz.png';
import thumbRP from '../images/thumb-rp.png';
import thumbL11 from '../images/thumb-l11.png';
import thumbE5 from '../images/thumb-e5.png';
import thumbGB from '../images/thumb-gb.png';
// styles
import '../styles/selected-work.scss';


const SelectedWork = () => (
  <div className="SelectedWork" id="work">
    <h3 className="SelectedWork-header">
      Selected Work
    </h3>

    <ul className="SelectedWork-list">
      <li className="SelectedWork-listItem">
        <Link
          className="g-bg-change"
          to="/rocketpost"
        >
          <img className="SelectedWork-thumb" src={thumbRP} alt="RocketPost thumbnail" />
          <h3>RocketPost</h3>
          <p>Creative Direction & UI+UX Design</p>
          <img className="SelectedWork-arrow" src={arrow} alt="View case study for RocketPost." />
        </Link>
      </li>
      <li className="SelectedWork-listItem">
        <Link
          className="g-bg-change"
          to="/leveleleven"
        >
          <img className="SelectedWork-thumb" src={thumbL11} alt="RocketPost thumbnail" />
          <h3>LevelEleven</h3>
          <p>Brand, Website & UI+UX Design</p>
          <img className="SelectedWork-arrow" src={arrow} alt="View case study for Leveleleven." />
        </Link>
      </li>
      <li className="SelectedWork-listItem">
        <Link
          className="g-bg-change"
          to="/element5"
        >
          <img className="SelectedWork-thumb" src={thumbE5} alt="RocketPost thumbnail" />
          <h3>Element5</h3>
          <p>Agency Rebrand</p>
          <img className="SelectedWork-arrow" src={arrow} alt="View case study for Element5." />
        </Link>
      </li>
      <li className="SelectedWork-listItem">
        <Link
          className="g-bg-change"
          to="/gentlemans-box"
        >
          <img className="SelectedWork-thumb" src={thumbGB} alt="RocketPost thumbnail" />
          <h3>Gentleman's Box</h3>
          <p>Brand & Package Design</p>
          <img className="SelectedWork-arrow" src={arrow} alt="View case study for Gentlemans Box." />
        </Link>
      </li>
    </ul>
  </div>
)

export default SelectedWork;
