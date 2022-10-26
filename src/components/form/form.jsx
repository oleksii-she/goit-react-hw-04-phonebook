import { React, useState } from 'react';
import { nanoid } from 'nanoid';
import { FormStyle, Label, Button } from './form.styled';

export const Form = ({ onSubmit }) => {
  const [contacts, setContacts] = useState([]);
  const [filter, setCFilter] = useState([]);
  const [name, setName] = useState([]);
  const [number, setNumber] = useState([]);

  nameId = nanoid();
  tagInputId = nanoid();

  handlerInputName = e => {
    const { name, value } = e.target;
    setName({ [name]: value });
  };

  handlerSubmitForm = e => {
    e.preventDefault();
    onSubmit(number, name);
    reset();
  };

  reset = () => {
    setName((name = ''));
    setNumber((number = ''));
  };

  return (
    <FormStyle action="" onSubmit={handlerSubmitForm}>
      <Label htmlFor={nameId}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id={this.tagInputId}
          required
          value={name}
          onChange={handlerInputName}
        />
      </Label>
      <Label htmlFor={nameId}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          id={tagInputId}
          required
          value={number}
          onChange={handlerInputName}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormStyle>
  );
};
