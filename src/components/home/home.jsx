import React, { useState, useEffect } from 'react';
import './home.css';

const Home = ({ resultados, fetchNextPage, fetchPrevPage, currentQuery }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [resultados]);

  return (
    <div className='main__content'>
      
      <div className='main__content-grid'>
        {resultados.map((elemento, indice) => (
          <div key={indice} className='main__content-grid__image-container'>
            <img src={elemento.urls.regular} alt={elemento} />
            <button className='attributes' onClick={() => openModal(elemento)}>Ver características</button>
            {modalOpen && selectedImage === elemento && (
              <div className='modal' onClick={handleModalClick}>
                <div className='modal-content'>
                  <span className='close' onClick={closeModal}>&times;</span>
                  <div className='image-details'>
                    <p>Width: {elemento.width}</p>
                    <p>Height: {elemento.height}</p>
                    <p>Likes: {elemento.likes}</p>
                    <p>Created At: {elemento.created_at}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Home;
