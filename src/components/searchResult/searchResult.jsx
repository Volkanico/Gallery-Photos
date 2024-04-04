import React from 'react';
import './searchResult.css'
const SearchResult = ({ resultados }) => {
  return (
    <div className='main__content'>
      <div className='main__content--grid'>
        {resultados.map((elemento, indice) => {
          return <img key={indice} src={elemento.urls.regular} alt={elemento} />;
        })}
      </div>
    </div>
  );
};

export default SearchResult;
