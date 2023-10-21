import React, { Component } from 'react';
import css from './ContactElements.module.css';
const ContactElements = ({ id, name, number, onDelete }) => {
  return (
    <li key={id}>
      <span> {name}:</span>
      <span> {number}</span>
      <button type="button" onClick={() => onDelete(id)}>
        Delay
      </button>
    </li>
  );
};
export default ContactElements;
