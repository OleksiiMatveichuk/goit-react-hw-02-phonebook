import { Component } from 'react';
import { nanoid } from 'nanoid';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number, contacts } = this.state;
    const newItem = { id: nanoid(), name, number };
    this.setState({ contacts: [...contacts, newItem], name: '', number: '' });
  };

  handleDelete = e => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter(contact => contact.id !== e.target.name),
    });
  };

  handleFilerChange = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  handleFilter = () => {
    const { filter, contacts } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  render() {
    const resultFilter = this.handleFilter();
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
          // maxWidth: '600px',
          // backgroundColor: '#fff',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm
          change={this.handleChange}
          submit={this.handleSubmit}
          name={this.state.name}
          number={this.state.number}
        />
        <h2>Contacts</h2>
        <Filter
          filterChange={this.handleFilerChange}
          value={this.state.filter}
        />
        <ContactList array={resultFilter} clbDelete={this.handleDelete} />
      </div>
    );
  }
}
