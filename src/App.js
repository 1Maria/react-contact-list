import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import ContactList from './contact-list';
import Contact from './contact';
import AddContact from './add-contact';

class App extends Component {
  constructor () {
    super()

    this.state = {
      contacts: [
        { id: 1, name: 'Ada Lovelace', image_url: 'https://picsum.photos/200', email: 'ada@gmail.com', phone_number: '123-555-1234' },
        { id: 2, name: 'Grace Hopper', image_url: 'https://picsum.photos/200', email: 'grace@gmail.com', phone_number: '123-555-1235' },
        { id: 3, name: 'Katherine Goble', image_url: 'https://picsum.photos/200', email: 'katherine@gmail.com', phone_number: '123-555-1236' },
        { id: 4, name: 'Mary Jackson', image_url: 'https://picsum.photos/200', email: 'mary@gmail.com', phone_number: '123-555-1237' },
        { id: 5, name: 'Dorothy Vaughan', image_url: 'https://picsum.photos/200', email: 'dorothy@gmail.com', phone_number: '123-555-1238' }
      ]
    }

    this.addContact = this.addContact.bind(this);
  }

  addContact (contact) {
    console.log(contact);
    this.setState({contacts: [...this.state.contacts, contact]});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <Switch>
            <Route exact path="/" render={() => <ContactList contacts={this.state.contacts} /> }/>
            <Route path="/contact/:id" render={(routerProps) => <Contact routerProps={routerProps} contacts={this.state.contacts} /> }/>
            <Route path="/add-contact" render={(routerProps) => <AddContact routerProps={routerProps} addContact={this.addContact} contacts={this.state.contacts} /> }/>
          </Switch>
        </main>
        <Link to="/">Contact List </Link>
        <Link to="/add-contact">Add Contact</Link>
      </div>
    );
  }
}

export default App;
