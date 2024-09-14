// ViewContactDetails.js
import React from 'react';

const ViewContactDetails = ({ contact, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Contact Details</h2>
        <div className="contact-details">
            <p><strong>Name</strong> <strong>:</strong>{contact.name}</p>
            <p><strong>Mobile</strong> <strong>:</strong>{contact.mobile}</p>
            <p><strong>Email</strong> <strong>:</strong>{contact.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewContactDetails;
