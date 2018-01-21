import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
// styles
import '../styles/selected-work.scss';
// images
import arrow from '../images/arrow-horiz.png';

class SelectedWork extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
              <h3>RocketPost</h3>
              <p>Creative Direction & UI+UX Design</p>
              <img src={arrow} alt="View case study for RocketPost." />
            </Link>
          </li>
          <li className="SelectedWork-listItem">
            <Link
              className="g-bg-change"
              to="/leveleleven"
            >
              <h3>LevelEleven</h3>
              <p>Brand, Website & UI+UX Design</p>
              <img src={arrow} alt="View case study for Leveleleven." />
            </Link>
          </li>
          <li className="SelectedWork-listItem">
            <Link
              className="g-bg-change"
              to="/element5"
            >
              <h3>Element5</h3>
              <p>Agency Rebrand</p>
              <img src={arrow} alt="View case study for Element5." />
            </Link>
          </li>
          <li className="SelectedWork-listItem">
            <Link
              className="g-bg-change"
              to="/gentlemans-box"
            >
              <h3>Gentlemans Box</h3>
              <p>Brand & Package Design</p>
              <img src={arrow} alt="View case study for Gentlemans Box." />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

SelectedWork.propTypes = {

};

export default SelectedWork;
