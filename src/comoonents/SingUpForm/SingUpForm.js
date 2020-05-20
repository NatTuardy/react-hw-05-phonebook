import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import styles from './SingUpForm.module.css';
import Alert from '../Alert/Alert';
import slideTransition from '../Transition/slide.module.css';

import PropTypes from 'prop-types';

export default class SingUpForm extends Component {
  state = {
    name: '',
    number: '',
    isAlert: false,
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target;
    const repeatName = this.props.contacts.map(contact => contact.name);
    if (!repeatName.includes(e.target.name.value)) {
      const human = { id: uuidv4(), name: name.value, number: number.value };
      this.props.getContact(human);
      this.reset();
    } else {
      this.setState({ isAlert: true });
      setTimeout(() => {
        this.reset();
      }, 3000);
      // alert(`${name.value} is already in contacts`);
      // this.reset();
    }
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
      isAlert: false,
    });
  };

  render() {
    const { name, number, isAlert } = this.state;
    return (
      <>
        <CSSTransition
          in={isAlert}
          timeout={500}
          classNames={slideTransition}
          unmountOnExit>
          <Alert />
        </CSSTransition>
        <form onSubmit={this.handleSubmit}>
          <label className={styles.label} ntmlfor={this.loginInputId}>
            Name
            <input
              className={styles.input}
              type="text"
              value={name}
              onChange={this.handleChange}
              name="name"
              minLength="3"
              placeholder="Enter name"
            />
          </label>
          <br />
          <label className={styles.label} ntmlfor={this.loginInputId}>
            Number
            <input
              className={styles.input}
              type="number"
              value={number}
              onChange={this.handleChange}
              name="number"
              minLength="5"
              placeholder="Enter telephon number"
            />
          </label>

          <button className={styles.button} type="submit">
            Add contact {name}
          </button>
        </form>
      </>
    );
  }
}

SingUpForm.propTypes = {
  getContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object),
};
