import React, { Component } from 'react';
import PropTypes from 'prop-types';
// styles
import '../styles/about.scss';
// images

class About extends Component {

  render() {
    return (
      <div id="about" className="About g-container">
        <div className="About-bio">
          <h3 className="g-color-change">I am a digital craftsman who creates beautiful and intuitive user interfaces.</h3>

          <p>Being a creative director and UI+UX designer with over a 8 years experience, I know how to fuel freelance relationships, high imapact startups and creative agencies. I have a strong passion for leading teams to create amazing products and brands with a human centered design approach.</p>

          <p>When not creating amazing experiences during my 9 to 5, you can find me freelancing with the Habitat Collective, shooting video for my youtube channel, hitting the links and enjoying the outdoors or watching Disney movies.</p>
        </div>

        <div className="About-awards">
          <h3 className="gray">Awards & Recognition</h3>

          <div className="About-award">
            <p className="About-award-date small gray">2015</p>
            <p className="About-award-title">Gold Hermes Award</p>
            <p className="About-award-work small gray-light">Website Design</p>
          </div>
          <div className="About-award">
            <p className="About-award-date small gray">2015</p>
            <p className="About-award-title">Gold Communicator Award</p>
            <p className="About-award-work small gray-light">Branding</p>
          </div>
          <div className="About-award">
            <p className="About-award-date small gray">2014</p>
            <p className="About-award-title">2 Platinum Marcom Awards</p>
            <p className="About-award-work small gray-light">Website Design</p>
          </div>
          <div className="About-award">
            <p className="About-award-date small gray">2014</p>
            <p className="About-award-title">Silver Davey Award</p>
            <p className="About-award-work small gray-light">Visual Appeal in Website Design</p>
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {

};

export default About;
