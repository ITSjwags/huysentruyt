import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Link as ScrollLink } from 'react-scroll';
// images
import arrow from '../images/arrow.png';
// styles
import '../styles/hero.scss';


class Hero extends Component {

  getPhrase() {
    const hr = (new Date()).getHours();
    const phrases = ["GOOD MORNING.", "GOOD AFTERNOON.", "GOOD EVENING"];

    if (hr < 12) return phrases[0];
    if (hr >= 18) return phrases[2];

    return phrases[1];
  }

  render() {
    const { background } = this.props;

    return (
      <div className="Hero g-bg-change">
        <div className="Hero-content">
          <div className="Hero-left">
            <div className="Hero-left-content">
              <span className="Hero-left-tagline">
                {this.getPhrase()}
              </span>
              <h2>I’m Jeffrey, a creative director & UI+UX designer working in Detroit.</h2>

              <div className="Hero-buttons">
                <ScrollLink
                  className="g-button"
                  to="about"
                  smooth={"easeInOutQuad"}
                  duration={750}
                  offset={-70}
                >
                  About Me
                  <span></span>
                  <span></span>
                </ScrollLink>

                <ScrollLink
                  className="g-button"
                  to="work"
                  smooth={"easeInOutQuad"}
                  duration={750}
                  offset={-70}
                >
                  My Work
                  <span></span>
                  <span></span>
                </ScrollLink>
              </div>
            </div>
          </div>

          <div className="Hero-right">
            <div className="Hero-right-background">
              <Img sizes={background.sizes} />
            </div>
            <div className="Hero-right-content">
              <ScrollLink
                to="about"
                smooth={"easeInOutQuad"}
                duration={750}
                offset={-70}
              >
                <img src={arrow} alt="Scroll down for more content." />
                <span>You know what to do</span>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Hero.propTypes = {
  background: PropTypes.object,
};

export default Hero;
