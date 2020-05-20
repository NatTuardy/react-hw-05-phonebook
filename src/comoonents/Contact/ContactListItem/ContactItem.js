import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

const ContactItem = ({ contact, onDeleteContact = () => null }) => {
  return (
    <>
      <li className={styles.item}>
        {contact.name} : {contact.number}
        <button
          className={styles.button}
          type="button"
          id={contact.id}
          onClick={onDeleteContact}>
          Delete
        </button>
      </li>
    </>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contact: PropTypes.object,
};
