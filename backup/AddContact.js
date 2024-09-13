// #AddContact.js
import React, { useState } from 'react';

const AddContact = ({ onAdd, onClose }) => {
  const [contact, setContact] = useState({ name: '', mobile: '', email: '' });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contact.name || !contact.mobile || !contact.email) {
      alert('All fields are required');
      return;
    }
    contact.id = Date.now();
    onAdd(contact);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Add Contact</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:
            <input type="text" name="name" value={contact.name} onChange={handleChange} />
          </label>
          <label>Mobile:
            <input type="text" name="mobile" value={contact.mobile} onChange={handleChange} />
          </label>
          <label>Email:
            <input type="email" name="email" value={contact.email} onChange={handleChange} />
          </label>
          <button type="submit">Add Contact</button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
