import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: ' ',
    number: ' ',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
    // this.setState({[event.currentTarget.name]: event.currentTarget.value})
  };

  render() {
    return (
      <form className={css.form}>
        <label htmlFor="">
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <label htmlFor="">
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            required
          />
        </label>

        <button type="button">Add contact</button>
      </form>
    );
  }
}
export default ContactForm;
