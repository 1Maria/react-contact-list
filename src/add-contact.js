import { Link } from 'react-router-dom';
import React, { Component } from 'react';

class AddContact extends Component {
  constructor(props) {
    super()

    this.state = {
      name: '',
      image_url: '',
      email: '',
      phone_number: ''
    }

  }
  render () {
    return (
      <div>
        <form>
        <label>Name</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ name: event.target.value })
        }/>

        <br/>

        <label>Image URL</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ image_url: event.target.value })
        }/>

        <br/>

        <label>Email</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ email: event.target.value })
        }/>

        <br/>

        <label>Phone Number</label>
        <input type='text' className='form-control'onChange={event =>
          this.setState({ phone_number: event.target.value })
        }/>

        <button type="button" onClick={() => {
          const newContact = {
            id: Math.round(Math.random() * 100000000),
            name: this.state.name,
            image_url: this.state.image_url,
            email: this.state.email,
            phone_number: this.state.phone_number
          }
          this.props.addContact(newContact);
          this.props.routerProps.history.push('/')
        }} >Submit</button>
        </form>

        <Link to='/'>Contacts</Link>
      </div>);
  }
};

export default AddContact;
