import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import { addContact } from '../../actions/ContactActions';

class ContactForm extends Component {
    state = {
        id:'',
        name:'',
        email:'',
        number:'',
        imageUrl:''
       } 

    onSubmit = (e) => {
        e.prevent.default();

        const newContact = {
            id: uuid(),
            name: this.state.name,
            email: this.state.email,
            number: this.state.number,
            imageUrl: this.state.imageUrl
        }

        console.log(newContact);

        // Add Contact
        this.props.addContact(newContact);
    }

    onChange = (e) => this.setState({ 
        [e.target.name]: e.target.value 
    });

    render() {
        return (
            <div className="container">
            <form onSubmit={this.onSubmit}>
                <h2>Add a new Contact</h2>
            <div className="form-group row">
                <label className="col-sm col-form-label">Name</label>
                <div className="col-sm">
                    <input 
                        type="name" 
                        name="name" 
                        value={this.state.name}
                        onChange={this.onChange}
                        placeholder="Name"
                    />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm col-form-label">Email Address</label>
                <div className="col-sm">
                    <input 
                        type="email" 
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        placeholder="Email ID"
                    />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm col-form-label">Phone Number</label>
                <div className="col-sm">
                    <input 
                        type="number" 
                        name="number" 
                        value={this.state.number}
                        onChange={this.onChange}
                        placeholder="Phone Number"
                    />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm col-form-label">Url to Picture/Avatar</label>
                <div className="col-sm">
                    <input 
                        type="url"
                        name="imageUrl" 
                        value={this.state.url}
                        onChange={this.onChange}
                        placeholder="Paste Url"
                    />
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-10">
                    <button type="submit" className="btn btn-primary">Add to list</button>
                </div>
            </div>
            </form>
            </div>
        )
    }
}

ContactForm.propTypes = {
    addContact: PropTypes.func.isRequired,
    contact: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
    contact: state.contact
});

export default connect(mapStateToProps,{addContact})(ContactForm);
