import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../redux/contactSlice';
import { Input, Button, FormWrapper } from './StyledComponents';

const AddContactForm = ({ contactToEdit, clearEdit }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(contactToEdit?.name || '');
    const [email, setEmail] = useState(contactToEdit?.email || '');
    const [phone, setPhone] = useState(contactToEdit?.phone || '');

    useEffect(() => {
        if (contactToEdit) {
        setName(contactToEdit.name);
        setEmail(contactToEdit.email);
        setPhone(contactToEdit.phone);
    }
    }, [contactToEdit]);

    const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
        id: contactToEdit ? contactToEdit.id : Date.now(),
        name,
        email,
        phone,
    };

    if (contactToEdit) {
        dispatch(editContact(newContact));
        clearEdit();
    } else {
        dispatch(addContact(newContact));
    }
    setName('');
    setEmail('');
    setPhone('');
    };

    return (
    <FormWrapper onSubmit={handleSubmit} isEditing={!!contactToEdit}>
        <Input 
        type="text" 
        value={name} 
        placeholder="Nome completo"
        onChange={(e) => setName(e.target.value)} 
        required
        />
        <Input 
        type="email" 
        value={email} 
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)} 
        required
        />
        <Input 
        type="tel" 
        value={phone} 
        placeholder="Telefone"
        onChange={(e) => setPhone(e.target.value)} 
        required
        />
        <Button type="submit">{contactToEdit ? 'Salvar' : 'Adicionar'}</Button>
    </FormWrapper>
    );
};

export default AddContactForm;
