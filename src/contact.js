import React from 'react';

const Contact = (props) => {
  return <h1>Hello From cOntAcT {props.match.params.id}</h1>;
  //parseInt to look up later
};

export default Contact;
