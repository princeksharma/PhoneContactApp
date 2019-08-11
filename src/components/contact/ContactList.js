import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getContacts, deleteContact } from '../../actions/ContactActions';
import PropTypes from 'prop-types';

class ContactList extends Component {
    componentDidMount() {
        this.props.getContacts();
    }

    delContact = (id) => {
        this.props.deleteContact(id);
      }

    render() {
        const { contacts } = this.props.contact;
        return (
            <div className="container">
            {contacts.map(({id,name, email, number, imageUrl}) => (
                <div key={id} className="card">
                <div className="row">
                    <div className="col">
                        <img src={imageUrl} style={imgStyle} className="img-responsive" alt="Hello"/>
                    </div>
                    <div className="col">
                        <div className="card-block px-2">
                            <h5 className="card-title" style={{color:'black', fontWeight:'bolder'}}>{name}</h5>
                            <span className="card-text" style={{color:'black', fontWeight:'bolder'}}>{email}</span>
                            <br/>
                            <span className="card-text"style={{color:'black', fontWeight:'bolder'}}>{number}</span>
                        </div>
                    </div>
                    <div className="col">
                        <button onClick={this.delContact.bind(this, id)} style={btnStyle}>x</button>
                    </div>
                </div>
            </div>

            ))}
            </div>
        );
    }
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
    
}

const imgStyle = {
    width: '50%',
    padding: '5px 9px',
    borderRadius: '12%',
}

ContactList.propTypes = {
    getContacts: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired,
    contact: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  contact: state.contact
})

export default connect(mapStateToProps, { getContacts, deleteContact} )(ContactList);