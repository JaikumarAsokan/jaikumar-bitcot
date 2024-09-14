// SearchContact.js 
import React, { useState } from "react";

const SearchContact = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <div className="search-contact">
      <h1>All Contacts</h1>
      <input
        type="text"
        placeholder="Search by name, mobile or email"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchContact;
