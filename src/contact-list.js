import { Link } from 'react-router-dom';
import React from 'react';

const ContactList = ({contacts}) => (
  <div>
    <ul>
      {
        contacts.map(c => (
          <li key={c.id}>
            <Link to={`/contact/${c.id}`}>{c.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
);

export default ContactList;
