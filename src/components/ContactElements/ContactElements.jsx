import React, { Component } from 'react';
import css from './ContactElements.module.css';
const ContactElements = ({ id, name, number, onDelete }) => {
  return (
    <div>
      {/* <p>{name}:</p>
      <p>{number}</p>
      <button type="button" onClick={onDelete(id)}>
        Delay
      </button> */}
    </div>
  );
};
export default ContactElements;
