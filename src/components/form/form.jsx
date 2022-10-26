import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormStyle, Label, Button } from './form.styled';

export class Form extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  nameId = nanoid();
  tagInputId = nanoid();

  handlerInputName = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handlerSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <FormStyle action="" onSubmit={this.handlerSubmitForm}>
        <Label htmlFor={this.nameId}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            id={this.tagInputId}
            required
            value={name}
            onChange={this.handlerInputName}
          />
        </Label>
        <Label htmlFor={this.nameId}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            id={this.tagInputId}
            required
            value={number}
            onChange={this.handlerInputName}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormStyle>
    );
  }
}
