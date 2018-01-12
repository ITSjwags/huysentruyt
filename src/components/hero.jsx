import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
// styles
import '../styles/hero.scss';
// images
import arrow from '../images/arrow.png';
import heroImage from '../images/hero.jpg';

class Hero extends Component {
  render() {
    return (
      <div className="Hero g-bg-change">
        <div className="Hero-content">
          <div className="Hero-left">
            <div className="Hero-left-content">
              <span className="Hero-left-tagline">GOOD MORNING.</span>
              <h2>I’m Jeffrey, a creative director & UI+UX designer working in Detroit.</h2>

              <div className="Hero-buttons">
                <Link
                  className="Hero-button"
                  to="about"
                  smooth={"easeInOutQuad"}
                  duration={750}
                >
                  About Me
                  <span></span>
                  <span></span>
                </Link>

                <Link
                  className="Hero-button"
                  to="work"
                  smooth={"easeInOutQuad"}
                  duration={750}
                >
                  My Work
                  <span></span>
                  <span></span>
                </Link>
              </div>
            </div>
          </div>

          <div className="Hero-right">
            <img className="Hero-right-background" src={heroImage} alt="Jeffrey Huysentruyt image" />
            <div className="Hero-right-content">
              <Link
                to="about"
                smooth={"easeInOutQuad"}
                duration={750}
              >
                <img src={arrow} alt="Scroll down for more content." />
                <span>You know what to do</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Hero.propTypes = {

};

export default Hero;
