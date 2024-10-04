import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../redux/contactSlice';
import { ContactItem, Button } from './StyledComponents';

const ContactList = ({ onEdit }) => {
    const contacts = useSelector((state) => state.contacts.contacts);
    const dispatch = useDispatch();

    return (
    <div>
        {contacts.map((contact) => (
        <ContactItem key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <Button onClick={() => onEdit(contact)}>Editar</Button>
            <Button onClick={() => dispatch(removeContact(contact.id))}>
            Remover
            </Button>
        </ContactItem>
    ))}
    </div>
    );
};

export default ContactList;
