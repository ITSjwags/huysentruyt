import React, { Component } from 'react';
import _ from 'lodash';
import Link from "gatsby-link";
import PropTypes from 'prop-types';
// images
import arrow from '../images/arrow-horiz.png';
// styles
import '../styles/footer-case-study.scss';


class FooterCaseStudy extends Component {

  getFooterText() {
    const { currentPage, pages } = this.props;
    const position = pages.indexOf(currentPage);
    const nextPage = _.find(pages, (p, i) => i === (position + 1));

    if (nextPage === 'rocketpost' || !nextPage) {
      return 'RocketPost';
    } else if (nextPage === 'leveleleven') {
      return 'LevelEleven';
    } else if (nextPage === 'element5') {
      return 'Element5';
    } else if (nextPage === 'gentlemans-box') {
      return "Gentleman's Box";
    }
  }

  render() {
    const { currentPage, pages } = this.props;
    const position = pages.indexOf(currentPage);
    const nextPage = _.find(pages, (p, i) => i === (position + 1));

    return (
      <Link
        className={`FooterCaseStudy FooterCaseStudy--${nextPage || pages[0]}`}
        to={`/${nextPage ? nextPage : pages[0]}`}
      >
        <p>Next Project</p>
        <h2>{this.getFooterText()}</h2>
        <img src={arrow} alt={`Link to the ${nextPage} case study`} />
      </Link>
    )
  }
}

FooterCaseStudy.propTypes = {
  currentPage: PropTypes.string,
  pages: PropTypes.array,
}

export default FooterCaseStudy;
