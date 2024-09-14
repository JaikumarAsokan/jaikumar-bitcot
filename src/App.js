// App.js 
import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import ContactDashboard from './components/ContactDashboard';
import ContactFormAndDetails from './components/ContactFormAndDetails';
import SearchContact from './components/SearchContact';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState(''); // 'add', 'edit', or 'view'

  // Fetch contacts using Axios (GET)
  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json')
      .then(response => {
        setContacts(response.data);
      })
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);

  // Add or Edit contact (POST/PUT simulated using local state)
  const handleSaveContact = (contact) => {
    if (modalMode === 'add') {
      setContacts([...contacts, { ...contact, id: Date.now() }]);
    } else if (modalMode === 'edit') {
      const updatedContacts = contacts.map(c => c.id === contact.id ? contact : c);
      setContacts(updatedContacts);
    }
    setModalOpen(false);
  };

  // Delete contact (DELETE simulated using local state)
  const handleDeleteContact = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  const handleOpenModal = (contact, mode) => {
    setSelectedContact(contact);
    setModalMode(mode);
    setModalOpen(true);
  };

  const displayContacts = useMemo(() => {
    if (!searchTerm || searchTerm === '') {
      return contacts; // Reset to all contacts
    } else {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.mobile.includes(searchTerm) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }, [contacts, searchTerm]);

  return (
    <div className="app">
      <SearchContact onSearch={(searchTerm) => setSearchTerm(searchTerm)} />
      <ContactDashboard
        contacts={displayContacts}
        onDelete={handleDeleteContact}
        onEdit={(contact) => handleOpenModal(contact, 'edit')}
        onView={(contact) => handleOpenModal(contact, 'view')}
        onAdd={() => handleOpenModal(null, 'add')}
      />
      {isModalOpen && (
        <ContactFormAndDetails
          contact={selectedContact}
          onSave={handleSaveContact}
          onClose={() => setModalOpen(false)}
          mode={modalMode}
        />
      )}
    </div>
  );
};

export default App;
