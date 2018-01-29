import React, { Component } from 'react';
import PropTypes from 'prop-types';
// styles
import '../styles/footer.scss';
// images
import iconDribbble from '../images/icon-dribbble.png';
import iconFacebook from '../images/icon-facebook.png';
import iconInstagram from '../images/icon-instagram.png';
import iconLinkedin from '../images/icon-linkedin.png';
import iconTwitter from '../images/icon-twitter.png';
import iconYoutube from '../images/icon-youtube.png';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovering: false
    }
  }

  onMouseEnter = () => {
    this.setState({ isHovering: true })
  }

  onMouseLeave = () => {
    this.setState({ isHovering: false })
  }

  render() {
    const { isHovering } = this.state;

    return (
      <div className="Footer g-bg-change">
        <div className="Footer-content">
          <ul className={`Footer-list${isHovering ? ' is-hovering' : ''}`}>
            <li>
              <a
                href="https://www.linkedin.com/in/therealmcjeffy/"
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                target="_blank"
              >
                <img src={iconLinkedin} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/jhuysentruyt"
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                target="_blank"
              >
                <img src={iconFacebook} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/therealmcjeffy"
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                target="_blank"
              >
                <img src={iconTwitter} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/therealmcjeffy/"
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                target="_blank"
              >
                <img src={iconInstagram} />
              </a>
            </li>
            <li>
              <a
                href="https://dribbble.com/therealmcjeffy"
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                target="_blank"
              >
                <img src={iconDribbble} />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UC82RsyFkZrFGOnvMznkHGsA"
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                target="_blank"
              >
                <img src={iconYoutube} />
              </a>
            </li>
          </ul>

          <div className="Footer-right">
            <a href="#" className="Footer-download">
              Resume
            </a>
          </div>
        </div>
      </div>
    )
  }
}

Footer.propTypes = {

};

export default Footer;
