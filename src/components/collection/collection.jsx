import React, { useState, useEffect } from 'react';
import './collection.css';

const Collection = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  const handleRemoveFromFavorites = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites.splice(index, 1);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h1>Mis Imágenes Guardadas</h1>
      <div className='collection-grid'>
        {favorites.map((favorite, index) => (
          <div key={index} className='collection-item'>
            <img src={favorite.urls.regular} alt={favorite} />
            <div className='image-details'>
              <p>Width: {favorite.width}</p>
              <p>Height: {favorite.height}</p>
              <p>Likes: {favorite.likes}</p>
              <p>Created At: {favorite.created_at}</p>
            </div>
            <button onClick={() => handleRemoveFromFavorites(index)}>Eliminar de localStorage</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
