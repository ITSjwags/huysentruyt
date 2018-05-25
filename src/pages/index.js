import React, { Component } from 'react';
// components
import Hero from '../components/hero';
import About from '../components/about';
import SelectedWork from '../components/selected-work';
import ContactForm from '../components/contact-form';

class IndexPage extends Component {
  render() {
    const { data } = this.props;
    const { heroBackground, rp, l11, e5, gb } = data;

    return (
      <div>
        <Hero background={heroBackground} />
        <About />
        <SelectedWork thumbs={{ rp, l11, e5, gb }} />
        <ContactForm />
      </div>
    )
  }
}

export default IndexPage;

export const query = graphql`
  query IndexPageImages {
    heroBackground: imageSharp(id: {regex: "/hero.jpg/"}) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
    rp: imageSharp(id: {regex: "/thumb-rp.png/"}) {
      sizes(maxWidth: 1350) {
        ...GatsbyImageSharpSizes
      }
    }
    l11: imageSharp(id: {regex: "/thumb-l11.png/"}) {
      sizes(maxWidth: 1350) {
        ...GatsbyImageSharpSizes
      }
    }
    e5: imageSharp(id: {regex: "/thumb-e5.png/"}) {
      sizes(maxWidth: 1350) {
        ...GatsbyImageSharpSizes
      }
    }
    gb: imageSharp(id: {regex: "/thumb-gb.png/"}) {
      sizes(maxWidth: 1350) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
