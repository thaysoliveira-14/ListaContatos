import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AddContactForm from './components/AddContactForm';
import ContactList from './components/ContactList';
import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: #ccc;
  color: #4a2259;
  min-height: 100vh;
  padding: 20px;
`;

const Titulo = styled.h1`
  text-align: center;
  font-family: sans-serif;
  font-weight: 800;
`

function App() {
  const [editContact, setEditContact] = useState(null);

  const handleEdit = (contact) => {
    setEditContact(contact);
  };

  const clearEdit = () => {
    setEditContact(null);
  };

  return (
    <Provider store={store}>
      <AppContainer>
        <Titulo>Lista de Contatos</Titulo>
        <AddContactForm contactToEdit={editContact} clearEdit={clearEdit} />
        <ContactList onEdit={handleEdit} />
      </AppContainer>
    </Provider>
  );
}

export default App;
