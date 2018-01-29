import React from 'react';
// components
import Hero from '../components/hero';
import About from '../components/about';
import SelectedWork from '../components/selected-work';
import ContactForm from '../components/contact-form';


const IndexPage = () => (
  <div>
    <Hero />
    <About />
    <SelectedWork />
    <ContactForm />
  </div>
)

export default IndexPage;
