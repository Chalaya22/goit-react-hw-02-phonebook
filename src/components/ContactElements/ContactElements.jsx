import React, { Component } from 'react';
import css from './ContactElements.module.css';
const ContactElements = ({ id, name, number }) => {
  return (
    <div key={id}>
      <span> {name}:</span>
      <span> {number}</span>
      <button type="button">Delay</button>
    </div>
  );
};
export default ContactElements;
