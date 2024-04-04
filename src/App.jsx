import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from './actions/photosActions';
import Navbar from './components/navbar/navbar.jsx';
import Home from './components/home/home.jsx';

function App() {
  const [valor, setValor] = useState('');
  const [resultados, setResultados] = useState([]);
  const [currentQuery, setCurrentQuery] = useState(''); // Nuevo estado para la consulta actual
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos);

  const handleSearch = () => {
    setCurrentQuery(valor); // Almacenar la consulta actual
    dispatch(fetchPhotos(valor));
  };

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  useEffect(() => {
    //console.log("Nuevo estado de photos:", photos);
    if (photos.resultados) {
      setResultados(photos.resultados);
    }
  }, [photos.resultados]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    dispatch(fetchPhotos(currentQuery, currentPage + 1));
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
    console.log(currentPage)
    dispatch(fetchPhotos(currentQuery, currentPage - 1));
  };

  return (
    <div>
      {currentQuery && (
  <div className="pagination">
    <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
    <span>Page {currentPage}</span>
    <button onClick={handleNextPage}>Next</button>
  </div>
)}

      <Navbar
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        onClick={handleSearch}
      />
      
      <Home
        resultados={resultados}
        fetchNextPage={handleNextPage} // Pasar la función de paginación siguiente como prop
        fetchPrevPage={handlePrevPage} // Pasar la función de paginación anterior como prop
        currentQuery={currentQuery} // Pasar la consulta actual como prop
      />
    </div>
  );
}

export default App;
