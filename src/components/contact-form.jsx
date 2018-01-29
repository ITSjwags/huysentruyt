import React, { Component } from 'react';
import PropTypes from 'prop-types';
// components
import Input from './input';
// styles
import '../styles/contact.scss';


class ContactForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="Contact" id="contact">
        <div className="Contact-container">

          <h3 className="g-color-change">Hey. We should hangout.</h3>
          <p>If you are interested in a new project, collaboration, or a reason to get a drink don't hesitate to fill out the form to the right.</p>

          <form action="https://formspree.io/jvwagoner@gmail.com" method="POST">

            <Input
              label="Name"
              name="name"
              placeholder="Name"
              required
              type="text"
            />
            <Input
              label="Email"
              name="email"
              placeholder="Email"
              required
              type="email"
            />
            <Input
              label="Message"
              name="message"
              placeholder="Message"
              required
              type="textarea"
            />

            {/* we can add a url to the value for the _next field */}
            <input type="hidden" name="_next" value="./" />
            <input type="text" name="_gotcha" style={{ display: 'none' }} />

            <button className="g-button g-button--alt">
              Say Hey
              <span></span>
              <span></span>
            </button>
          </form>

        </div>
      </div>
    );
  }
}

ContactForm.propTypes = {

};

export default ContactForm;
