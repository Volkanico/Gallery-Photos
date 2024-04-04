import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from './actions/photosActions';
import SearchInput from './components/searchInput/searchInput.jsx';
import SearchResult from './components/searchResult/searchResult.jsx';

function App() {
  const [valor, setValor] = useState('');
  const dispatch = useDispatch();
  const resultados = useSelector((state) => state.photos.resultados);

  const handleSearch = () => {
    dispatch(fetchPhotos(valor));
  };

  return (
    <div>
      <SearchInput
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        onClick={handleSearch}
      />
      <SearchResult resultados={resultados} />
    </div>
  );
}

export default App;
