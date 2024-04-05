import React from 'react';
import logo from '../../assets/lary-avatar.svg'
import './navbar.css';
import { Link } from "react-router-dom";
const Navbar = ({ value, onChange, onClick }) => {
  
 

  return (
    <div className='search__box'>
      <div className='search__box__logo'>
      <img src={logo} alt="logo" className='logo'/>

      </div>
      
      <input
        className='search__box--input'
        placeholder='Buscar imágenes'
        value={value}
        onChange={onChange}
      />
      <button className='search__box--btn' onClick={onClick}>
        Buscar
      </button>
      <Link to="/" className='search__box--home'>
        Inicio
      </Link>
      <Link to="/collection" className='search__box--collection'>
        Colección
      </Link>
      
    </div>
  );
};

export default Navbar;
