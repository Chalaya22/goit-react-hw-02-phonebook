import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  handleAddContact = contactList => {
    if (
      this.state.contacts.some(contact => contact.name === contactList.name)
    ) {
      alert(`'${contactList.name}' is already in contact`);
      return;
    }
    const newContact = {
      ...contactList,
      id: nanoid(),
    };
    this.setState({
      contacts: [...this.state.contacts, newContact],
    });
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleAddContact={this.handleAddContact} />

        <h2>Contacts</h2>
        <Filter />
        <ContactList
          filtredContacts={this.state.contacts}
          // onDelete={this.onDeleteHandler}
          // filterContacts={this.onFilterContacts}
        />
      </div>
    );
  }
}
