import { Link } from 'react-router-dom';
import React from 'react';

const Contact = (props) => {
  const contact = props.contacts.find(c => c.id === parseInt(props.routerProps.match.params.id));
  return (
    <div>
      <h2>{contact.name}</h2>
      <img src={contact.image_url} alt={contact.name}/>
      <p>{contact.email}</p>
      <p>{contact.phone_number}</p>
      <Link to='/'>Contacts</Link>
    </div>
  )
};

export default Contact;
