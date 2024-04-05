import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from './actions/photosActions';
import Navbar from './components/navbar/navbar.jsx';
import Home from './components/home/home.jsx';
import Collection from './components/collection/collection.jsx';
import './App.css'
import { Link, Route, Router, Routes } from 'react-router-dom';

function App() {
  
  const [valor, setValor] = useState('');
  const [resultados, setResultados] = useState([]);
  const [currentQuery, setCurrentQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos);

  const handleSearch = () => {
    setCurrentQuery(valor);
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
      
      <Navbar
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        onClick={handleSearch}
      />
      <Routes>
        <Route path='/' element={<Home
        resultados={resultados}
        currentQuery={currentQuery}
      />}/>
        <Route path='/collection' element={<Collection/>}/>
      </Routes>
      
      {currentQuery && (
  <div className="pagination-container">
    <button className="pagination-button" onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
    <span className="pagination-page">Page {currentPage}</span>
    <button className="pagination-button" onClick={handleNextPage}>Next</button>
  </div>
)}

      
    </div>
  );
}

export default App;
