import { React, useState } from 'react';
import { nanoid } from 'nanoid';
import { FormStyle, Label, Button } from './form.styled';

export const Form = ({ onSubmitData }) => {
  const [contacts, setContacts] = useState([]);
  const [filter, setCFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  state = {
    contacts,
    filter,
    name,
    number,
  };
  const nameId = nanoid();
  const tagInputId = nanoid();

  const handlerInputName = e => {
    const { value } = e.target;

    setName(value);
  };

  const handlerInputNumber = e => {
    const { value } = e.target;

    setNumber(value);
  };

  const handlerSubmitForm = e => {
    e.preventDefault();
    onSubmitData(state);
    reset();
  };

  const reset = () => {
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
          id={tagInputId}
          value={name}
          required
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
          value={number}
          required
          onChange={handlerInputNumber}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormStyle>
  );
};
