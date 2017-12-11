import React, { Component } from 'react';
import PropTypes from 'prop-types';
// styles
import '../styles/hero.scss';
// images
import arrow from '../images/arrow.png';

class Hero extends Component {
  render() {
    return (
      <div className="g-bg-change">
        <div className="Hero">
          <div className="g-container">
            <div className="Hero-content">
              <div className="Hero-left g-bg-change">
                <span>GOOD MORNING.</span>
                <h2>I’m Jeffrey, a creative director & UI+UX designer working in Detroit.</h2>

                <div className="Hero-buttons">
                  <a href="#about" className="Hero-button">About Me</a>
                  <a href="#work" className="Hero-button">My Work</a>
                </div>
              </div>

              <div className="Hero-right">
                <a href="#about">
                  <span>You know what to do</span>
                  <img src={arrow} alt="Scroll down for more content." />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Hero.propTypes = {

};

export default Hero;
