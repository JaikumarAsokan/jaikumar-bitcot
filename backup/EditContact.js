// EditContact.js
import React, { useState } from 'react';

const EditContact = ({ contact, onEdit, onClose }) => {
  const [updatedContact, setUpdatedContact] = useState(contact);

  const handleChange = (e) => {
    setUpdatedContact({ ...updatedContact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!updatedContact.name || !updatedContact.mobile || !updatedContact.email) {
      alert('All fields are required');
      return;
    }
    onEdit(updatedContact);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Edit Contact</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:
            <input type="text" name="name" value={updatedContact.name} onChange={handleChange} />
          </label>
          <label>Mobile:
            <input type="text" name="mobile" value={updatedContact.mobile} onChange={handleChange} />
          </label>
          <label>Email:
            <input type="email" name="email" value={updatedContact.email} onChange={handleChange} />
          </label>
          <button type="submit">Update Contact</button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
