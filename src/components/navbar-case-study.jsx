import React, { Component } from 'react';
import _ from 'lodash';
import Link from "gatsby-link";
import PropTypes from 'prop-types';
// styles
import '../styles/navbar.scss';


class NavbarCaseStudy extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      scrollTop: 0
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', _.debounce(this.handleScroll, 100));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    let scrollTop = e.target.documentElement.scrollTop;
    this.setState({
      scrollTop: scrollTop
    });
  }

  render() {
    const { currentPage, pages } = this.props;
    const { isActive, scrollTop } = this.state;
    const shouldbeFixed = scrollTop >= 100;
    const position = pages.indexOf(currentPage);
    const nextPage = _.find(pages, (p, i) => i === (position + 1));
    const prevPage = _.find(pages, (p, i) => i === (position - 1));

    return (
      <div className={`Navbar${isActive ? ' is-active' : ''}${shouldbeFixed ? ' is-fixed' : ''}`} ref="navbar">

        <Link
          className="Navbar-logo"
          to="/"
        >
          J<span className="fullname">effrey</span>.
        </Link>

        <div className="Navbar-caseStudy">
          <Link
            to={`/${prevPage ? prevPage : pages[pages.length - 1]}`}
          >
            &lt;
          </Link>

          <Link
            to="/"
          >
            X
          </Link>

          <Link
            to={`/${nextPage ? nextPage : pages[0]}`}
          >
            &gt;
          </Link>

        </div>

      </div>
    )
  }
}

NavbarCaseStudy.propTypes = {
  currentPage: PropTypes.string,
  pages: PropTypes.array,
}

export default NavbarCaseStudy;
