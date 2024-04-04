import React from 'react';
import './searchInput.css';
const SearchInput = ({ value, onChange, onClick }) => {
  return (
    <div className='search__box'>
      <input
        className='search__box--input'
        placeholder='Buscar imágenes'
        value={value}
        onChange={onChange}
      />
      <button className='search__box--btn' onClick={onClick}>
        Buscar
      </button>
    </div>
  );
};

export default SearchInput;
