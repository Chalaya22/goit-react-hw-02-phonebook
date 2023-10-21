import React, { Component } from 'react';
import css from './Filter.module.css';
const Filter = ({ filter, onFilter }) => {
  return (
    <div>
      <label htmlFor="filter">
        <p>Find contact by name</p>
        <input
          type="text"
          name="filter"
          id="filter"
          value={filter}
          onChange={onFilter}
        />
      </label>
    </div>
  );
};
export default Filter;
