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
  reset = () => {
    this.setState({ name: ' ', number: ' ' });
  };

  handleSubmit = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;
    const contactList = {
      name,
      number,
    };
    this.props.handleAddContact(contactList);
    this.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label>
          <p className={css.labelText}>Name</p>
          <input
            className={css.imputForm}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            placeholder="username: "
            pattern="[A-Za-z\s]+"
            required
          />
        </label>
        <label>
          <p className={css.labelText}>Number</p>
          <input
            className={css.imputForm}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            placeholder="Enter number tel: "
            required
          />
        </label>

        <button className={css.buttonForm} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
export default ContactForm;
