import React, { Component } from 'react';
import css from './ContactList.module.css';
import ContactElements from '../ContactElements/ContactElements';
const ContactList = ({ filtredContacts }) => {
  return (
    <>
      {filtredContacts.map(({ id, name, number }) => (
        <ContactElements key={id} name={name} id={id} number={number} />
      ))}
    </>
  );
};
export default ContactList;
