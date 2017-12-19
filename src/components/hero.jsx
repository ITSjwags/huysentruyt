import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
                <a href="#about" className="Hero-button">
                  About Me
                  <span></span>
                  <span></span>
                </a>
                <a href="#work" className="Hero-button">
                  My Work
                  <span></span>
                  <span></span>
                </a>
              </div>
            </div>
          </div>

          <div className="Hero-right">
            <img className="Hero-right-background" src={heroImage} alt="Jeffrey Huysentruyt image" />
            <div className="Hero-right-content">
              <a href="#about">
                <img src={arrow} alt="Scroll down for more content." />
                <span>You know what to do</span>
              </a>
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
