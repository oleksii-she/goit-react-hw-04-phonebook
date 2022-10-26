import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './form/form';
import { Filter } from './filter/Filter';
import { ContactsList } from './contacts/contactsList';
import { Conteiner } from './conteiner.styled';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  getFormData = ({ number, name }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => {
      if (contacts.find(el => el.name === contact.name)) {
        return alert(`${name} is already exist!`);
      }
      return {
        contacts: [contact, ...contacts],
      };
    });
  };

  filterName = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  FindContact = () => {
    const { contacts, filter } = this.state;
    const normalizedfilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedfilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <Conteiner>
        <h1>Phonebook</h1>
        <Form onSubmit={this.getFormData} />

        <h2>Contacts</h2>
        <Filter onChange={this.filterName} />
        <ContactsList
          dataList={this.FindContact()}
          onDeleteContact={this.deleteContact}
        />
      </Conteiner>
    );
  }
}
