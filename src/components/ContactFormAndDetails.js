import React, { useState, useEffect } from "react";

const ContactFormAndDetails = ({ contact, onSave, onClose, mode }) => {
  const [formContact, setFormContact] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  useEffect(() => {
    if (contact) {
      setFormContact(contact);
    } else {
      setFormContact({ name: "", mobile: "", email: "" });
    }
  }, [contact]);

  const handleChange = (e) => {
    setFormContact({ ...formContact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formContact.name || !formContact.mobile || !formContact.email) {
      alert("All fields are required");
      return;
    }
    onSave(formContact);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <>
          <h2>
            {mode === "add"
              ? "Add Contact"
              : mode === "edit"
              ? "Edit Contact"
              : "View Contact"}
          </h2>
          <form onSubmit={handleSubmit}>
            <fieldset disabled={mode === "view"} className="fieldset">
              <label>
                <strong>Name</strong>
                <input
                  type="text"
                  name="name"
                  value={formContact.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                <strong>Mobile</strong>
                <input
                  type="text"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  name="mobile"
                  value={formContact.mobile}
                  onChange={handleChange}
                />
              </label>
              <label>
                <strong>Email</strong>
                <input
                  type="email"
                  name="email"
                  value={formContact.email}
                  onChange={handleChange}
                />
              </label>
              {mode !== "view" && (
                <button type="submit">
                  {mode === "add" ? "Add Contact" : "Update Contact"}
                </button>
              )}
            </fieldset>
          </form>
        </>
      </div>
    </div>
  );
};

export default ContactFormAndDetails;
