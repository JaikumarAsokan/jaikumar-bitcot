// ContactForm.js
import React, { useState, useEffect } from 'react';

const ContactForm = ({ contact, onSave, onClose, mode }) => {
  const [formContact, setFormContact] = useState({ name: '', mobile: '', email: '' });

  useEffect(() => {
    if (mode === 'edit' && contact) {
      setFormContact(contact);
    }
  }, [contact, mode]);

  const handleChange = (e) => {
    setFormContact({ ...formContact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formContact.name || !formContact.mobile || !formContact.email) {
      alert('All fields are required');
      return;
    }
    onSave(formContact);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{mode === 'add' ? 'Add Contact' : 'Edit Contact'}</h2>
        <form onSubmit={handleSubmit}>
        {/* <div className="contact-details"> */}
          <label><strong>Name</strong> <strong>:</strong>
            <input type="text" name="name" value={formContact.name} onChange={handleChange} />
          </label>
          <label><strong>Mobile</strong> <strong>:</strong>
            <input type="text" name="mobile" value={formContact.mobile} onChange={handleChange} />
          </label>
          <label><strong>Email</strong> <strong>:</strong>
            <input type="email" name="email" value={formContact.email} onChange={handleChange} />
          </label>
          <button type="submit">{mode === 'add' ? 'Add Contact' : 'Update Contact'}</button>
        {/* </div> */}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
