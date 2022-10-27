import { React, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { FormData } from './form/form';
import { Filter } from './filter/Filter';
import { ContactsList } from './contacts/contactsList';
import { Conteiner } from './conteiner.styled';
import { contactsData } from './form/contactsData';
const LS_KEY = 'contact';
export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(LS_KEY)) ?? contactsData;
  });

  const [filter, setFilter] = useState('');

  const getFormData = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    if (contacts.find(el => el.name === contact.name)) {
      return alert(`${name} is already exist!`);
    }
    setContacts(prevState => [...prevState, contact]);
  };

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const filterName = e => {
    setFilter(e.target.value);
  };

  const FindContact = () => {
    const normalizedfilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedfilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <Conteiner>
      <h1>Phonebook</h1>
      <FormData onSubmit={getFormData} />

      <h2>Contacts</h2>
      <Filter onChange={filterName} />
      <ContactsList dataList={FindContact()} onDeleteContact={deleteContact} />
    </Conteiner>
  );
};
