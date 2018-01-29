import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: null
    }
  }

  onInputChange(value) {
    this.setState({ inputValue: value });
  }

  render() {
    const { label, name, placeholder, required, type } = this.props;
    const { inputValue } = this.state;

    return (
      <span className="form-field">
        {type === 'textarea' ?
          <textarea
            className={`${inputValue ? ' has-value' : ''}`}
            name={name}
            onChange={(e) => this.onInputChange(e.target.value)}
            placeholder={placeholder}
            required={required}
            value={inputValue || ''}
          />
          :
          <input
            className={`${inputValue ? ' has-value' : ''}`}
            name={name}
            onChange={(e) => this.onInputChange(e.target.value)}
            placeholder={placeholder}
            required={required}
            type={type}
            value={inputValue || ''}
          />
        }
        <label>{label}</label>
      </span>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
};

export default Input;
