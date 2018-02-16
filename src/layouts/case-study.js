import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
// components
import NavbarCaseStudy from '../components/navbar-case-study';
import FooterCaseStudy from '../components/footer-case-study';
// styles
import '../styles/index.scss';


class CaseStudyLayout extends Component {

  render() {
    const { children } = this.props;
    const pages = ['rocketpost', 'leveleleven', 'element5', 'gentlemans-box'];
    const location = this.props.location.pathname.split('/');
    const pageName = _.find(location, l => _.find(pages, p => p === l));

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
            <NavbarCaseStudy
              currentPage={pageName}
              pages={pages}
            />
          </div>
        </header>

        <main role="main">
          <div className="CaseStudy">
            {children()}
          </div>
        </main>

        <footer role="contentinfo">
          <FooterCaseStudy
            currentPage={pageName}
            pages={pages}
          />
        </footer>
      </div>
    )
  }
}

CaseStudyLayout.propTypes = {
  children: PropTypes.func,
}

export default CaseStudyLayout;
