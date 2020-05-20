import React from 'react';
import ContactItem from './ContactListItem/ContactItem';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import popTransition from '../Transition/pop.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <TransitionGroup component="ul" className={styles.list}>
      {/* {' '} */}
      {contacts.map(contact => (
        <CSSTransition
          key={contact.id}
          timeout={250}
          unmountOnExit
          classNames={popTransition}>
          <ContactItem
            contact={contact}
            key={contact.id}
            onDeleteContact={() => onDeleteContact(contact.id)}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default ContactList;

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object),
};
