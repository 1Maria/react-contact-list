import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContactList from './contact-list';
import Contact from './contact';
import AddContact from './add-contact';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={ContactList} />
      <Route path="/contact/:id" component={Contact} />
      <Route path="/add-contact" component={AddContact} />
    </Switch>
  </main>
);

export default Main;
