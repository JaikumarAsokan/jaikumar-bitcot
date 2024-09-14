// ContactsView.js 
import React from 'react';

const ContactDashboard = ({ contacts, onDelete, onEdit, onView, onAdd }) => {
  return (
    <div className="contacts-view">
      <button onClick={onAdd}>Add Contact</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            {/* <th>Email</th> */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.mobile}</td>
              {/* <td>{contact.email}</td> */}
              <td>
                <button onClick={() => onView(contact)} className="onView"><i class="fa-solid fa-eye"></i></button>
                <button onClick={() => onEdit(contact)}className="onEdit"><i class="fa-solid fa-pen-to-square"></i></button>
                <button onClick={() => onDelete(contact.id)}className="onDelete"><i class="fa-solid fa-trash-can"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactDashboard;

// ContactDashboard

