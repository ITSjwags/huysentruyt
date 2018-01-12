import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Link as ScrollLink } from 'react-scroll';
// styles
import '../styles/navbar.scss';
// images
import iconDribbble from '../images/icon-dribbble.png';
import iconFacebook from '../images/icon-facebook.png';
import iconInstagram from '../images/icon-instagram.png';
import iconLinkedin from '../images/icon-linkedin.png';
import iconTwitter from '../images/icon-twitter.png';
import iconYoutube from '../images/icon-youtube.png';

class Navbar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      menuHeight: 0
    }
  }

  componentDidMount() {
    this.getMenuHeight();
    window.addEventListener('resize', this.getMenuHeight);
    window.addEventListener('scroll', this.getMenuHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getMenuHeight);
    window.removeEventListener('scroll', this.getMenuHeight);
  }

  onToggleNavButton() {
    this.getMenuHeight();

    this.setState({
      isActive: !this.state.isActive
    });

    if (!this.state.isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  getMenuHeight = () => {
    const bodyHeight = window.innerHeight;
    const menuHeight = bodyHeight - this.refs.navbar.offsetHeight;

    this.setState({ menuHeight: menuHeight });
  }

  handleScrollLinkClick = () => {
    this.onToggleNavButton();
  }

  render() {
    const { isActive, menuHeight } = this.state;

    return (
      <div className={`Navbar ${isActive ? 'is-active' : ''}`} ref="navbar">
        <div>
          <Link
            className="Navbar-logo"
            to="/"
          >
            J<span className="fullname">effrey</span>.
          </Link>
        </div>

        <nav role="navigation">
          <div className={`Navbar-button ${isActive ? 'is-active' : ''}`}>
            <button
              className={`hamburger ${isActive ? 'is-active' : ''}`}
              onClick={() => this.onToggleNavButton()}
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
          </div>

          <div className="Navbar-list">
            <ul>
              <li>
                <ScrollLink
                  className="Navbar-listLink"
                  to="about"
                  smooth={"easeInOutQuad"}
                  duration={750}
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  className="Navbar-listLink"
                  to="work"
                  smooth={"easeInOutQuad"}
                  duration={750}
                >
                  Work
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  className="Navbar-listLink"
                  to="contact"
                  smooth={"easeInOutQuad"}
                  duration={750}
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>

          <div className={`Navbar-list-mobile g-bg-change ${isActive ? 'is-active' : ''}`}>
            <ul>
              <li>
                <h2>
                  <ScrollLink
                    className="Navbar-listLink"
                    to="about"
                    smooth={"easeInOutQuad"}
                    duration={750}
                    onClick={this.handleScrollLinkClick}
                    delay={250}
                  >
                    About
                  </ScrollLink>
                </h2>
              </li>
              <li>
                <h2>
                  <ScrollLink
                    className="Navbar-listLink"
                    to="work"
                    smooth={"easeInOutQuad"}
                    duration={750}
                    onClick={this.handleScrollLinkClick}
                    delay={250}
                  >
                    Work
                  </ScrollLink>
                </h2>
              </li>
              <li>
                <h2>
                  <ScrollLink
                    className="Navbar-listLink"
                    to="contact"
                    smooth={"easeInOutQuad"}
                    duration={750}
                    onClick={this.handleScrollLinkClick}
                    delay={250}
                  >
                    Contact
                  </ScrollLink>
                </h2>
              </li>
            </ul>

            <div className="Navbar-list-mobile-footer">
              <ul className="Navbar-list-mobile-socials">
                <li>
                  <a href="https://www.linkedin.com/in/therealmcjeffy/" target="_blank">
                    <img src={iconLinkedin} />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/jhuysentruyt" target="_blank">
                    <img src={iconFacebook} />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/therealmcjeffy" target="_blank">
                    <img src={iconTwitter} />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/therealmcjeffy/" target="_blank">
                    <img src={iconInstagram} />
                  </a>
                </li>
                <li>
                  <a href="https://dribbble.com/therealmcjeffy" target="_blank">
                    <img src={iconDribbble} />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UC82RsyFkZrFGOnvMznkHGsA" target="_blank">
                    <img src={iconYoutube} />
                  </a>
                </li>
              </ul>

              <a className="Navbar-list-resume" href="#">
                Full Resume
              </a>
            </div>
          </div>
        </nav>

      </div>
    )
  }
}

export default Navbar;
