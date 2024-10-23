import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import ContactForm from './pages/ContactForm';
import ContactList from './pages/ContactList';
import EditContact from './pages/EditContact';
import SERVER_URL from './Services/serverUrl';
import './App.css'

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const response = await axios.get(SERVER_URL);
    setContacts(response.data);
  };

  const addContact = async (contact) => {
    await axios.post(SERVER_URL, contact);
    fetchContacts();
  };

  const updateContact = async (id, updatedContact) => {
    await axios.put(`${SERVER_URL}/${id}`, updatedContact);
    fetchContacts();
  };

  const deleteContact = async (id) => {
    await axios.delete(`${SERVER_URL}/${id}`);
    fetchContacts();
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={
          <>
            <ContactForm addContact={addContact} />
            <ContactList contacts={contacts} deleteContact={deleteContact} />
          </>
        } />
        <Route path="/edit/:id" element={
          <EditContact contacts={contacts} updateContact={updateContact} />
        } />
      </Routes>
    </div>
  );
}

export default App;
