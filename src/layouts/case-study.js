import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
// components
import Navbar from '../components/navbar';
import Footer from '../components/footer';
// styles
import '../styles/index.scss';


class IndexLayout extends Component {

  render() {
    const { children } = this.props;
    const pageName = this.props.location.pathname.replace(/\//g, '');

    return (
      <div>
        <Helmet
          title="Jeffrey Huysentruyt"
          meta={[
            { name: 'description', content: `Jeffrey Huysentruyt's personal design portfolio.` },
            { name: 'keywords', content: 'jeffrey, huysentruyt, design' },
          ]}
        />
        <h1>Jeffrey Huysentruyt</h1>

        <header role="banner">
          <div className="g-container">
            <Navbar
              ref="navbar"
              page={pageName}
            />
          </div>
        </header>

        <main role="main">
          {children()}
        </main>

        <footer role="contentinfo">
          {/* <Footer /> */}
        </footer>
      </div>
    )
  }
}

IndexLayout.propTypes = {
  children: PropTypes.func,
}

export default IndexLayout;
