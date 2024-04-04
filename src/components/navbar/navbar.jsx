import React from 'react';
import { useDispatch } from 'react-redux';
import './navbar.css';
import { setRoute } from '../../routes/routesSlice';

const Navbar = ({ value, onChange, onClick }) => {
  const dispatch = useDispatch();
  const handleCollectionClick = () => {
    dispatch(setRoute('/coleccion')); 
  };

  return (
    <div className='search__box'>
      <div className='search__box__logo'>
        <img className='search__box__logo__img' src="" alt="logo" />
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
      <button className='search__box--colection' onClick={handleCollectionClick}>
        Colección
      </button>
    </div>
  );
};

export default Navbar;
