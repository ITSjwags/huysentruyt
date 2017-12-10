import React, { Component } from 'react';
import Link from 'gatsby-link';
// styles
import '../styles/navbar.scss';

class Navbar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    }
  }

  onToggleNavButton() {
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    const { isActive } = this.state;

    return (
      <div className="Navbar g-container">
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
              aria-expanded="false"
              aria-controls="menu"
              className={`hamburger ${isActive ? 'is-active' : ''}`}
              onClick={() => this.onToggleNavButton()}
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
          </div>

          <div className={`Navbar-list ${isActive ? 'is-active' : ''}`}>
            <ul>
              <li>
                <a href="#about" className="Navbar-listLink">About</a>
              </li>
              <li>
                <a href="#work" className="Navbar-listLink">Work</a>
              </li>
              <li>
                <a href="#contact" className="Navbar-listLink">Contact</a>
              </li>
            </ul>
          </div>
        </nav>

      </div>
    )
  }
}

export default Navbar;
