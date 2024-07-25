import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { IoChevronDown } from "react-icons/io5";



const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex  align-items-center">
        <IoIosSearch style={{ position: 'relative', left: "40px" }} />
        <input
        type="text"
        className="form-control me-2"
        placeholder="Search"
        style={{ width: '170px', paddingLeft: "50px"  }}
        value={searchTerm}
        onChange={handleInputChange}
        
        />
      <IoChevronDown style={{ position: 'relative', right: "50px" }} />
    </form>
  );
};

export default SearchBox;
