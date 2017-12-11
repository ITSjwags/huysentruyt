import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
// components
import Navbar from '../components/navbar';
// styles
import '../styles/index.scss';

class TemplateWrapper extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   height: 0
    // }
  }

  // componentDidMount() {
  //   const navbarHeight = ReactDOM.findDOMNode(this.refs.navbar).clientHeight;
  //   this.setState({ height: navbarHeight });
  // }

  render() {
    const { children } = this.props;
    // const { height } = this.state;

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
            />
          </div>
        </header>

        <main role="main" /*style={{ paddingTop: height }}*/>
          { children() }
        </main>

        <footer role="contentinfo">
          footer stuff
        </footer>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;
