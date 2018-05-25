import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
// images
import arrow from '../images/arrow-horiz.png';
// styles
import '../styles/selected-work.scss';

const SelectedWork = ({ thumbs }) => (
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
          <div className="SelectedWork-thumb">
            <Img sizes={thumbs.rp.sizes} alt="RocketPost thumbnail" />
          </div>
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
          <div className="SelectedWork-thumb">
            <Img sizes={thumbs.l11.sizes} alt="LevelEleven thumbnail" />
          </div>
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
          <div className="SelectedWork-thumb">
            <Img sizes={thumbs.e5.sizes} alt="Element5 thumbnail" />
          </div>
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
          <div className="SelectedWork-thumb">
            <Img sizes={thumbs.gb.sizes} alt="Gentleman's Box thumbnail" />
          </div>
          <h3>Gentleman's Box</h3>
          <p>Brand & Package Design</p>
          <img className="SelectedWork-arrow" src={arrow} alt="View case study for Gentlemans Box." />
        </Link>
      </li>
    </ul>
  </div>
)

export default SelectedWork;
