import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ contacts, value, onChangeFilter }) =>
  contacts.length >= 2 && (
    <>
      <h3 className={styles.tittle}>Find contact by name:</h3>,
      <input
        className={styles.inputt}
        type="search"
        value={value}
        onChange={onChangeFilter}
        placeholder="Find name"
      />
    </>
  );

export default Filter;

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string,
};
