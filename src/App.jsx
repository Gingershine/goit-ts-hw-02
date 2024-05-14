import { useState, useEffect } from 'react'
import './App.css'
import ImageGallery from './components/ImageGallery/ImageGallery';
import SearchBar from './components/SearchBar/SearchBar'
import fetchImagesByName  from './images-api'
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';



function App() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showBtn, setShowBtn] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);  
 
  
 useEffect(() => {
    
    if (!searchQuery) return;
    async function fetchImages() {
      try {        
        setisError(false);
        setisLoading(true);
        const data = await fetchImagesByName(searchQuery, currentPage);       
        setImages((prevImages) => [...prevImages, ...data.data.results]); 
        setShowBtn(data.data.total_pages && data.data.total_pages !== currentPage)
      }
      catch {
        setisError(true);
      }    
      finally {
        setisLoading(false);
      }
    } fetchImages()
  }, [searchQuery, currentPage]);
  
  const onSearchQuerySetup = (query) => {
    setSearchQuery(query);
    setImages([])
    setCurrentPage(1);
  }
  
 const openModal = (image) => {   
   setSelectedImage(image);
}  
   
  const closeModal = () => {
    setSelectedImage(null);
}

  const handleBtnClick = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  } 
  
  
  return (
    <>
      <SearchBar onSearch={onSearchQuerySetup} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage/>}
      <ImageGallery images={images} openModal={openModal} />
      {showBtn  && 
        <LoadMoreBtn onClick={handleBtnClick} />}
      {selectedImage &&
      <ImageModal
        modalImage={selectedImage}
        modalIsOpen={true}        
        closeModal={closeModal}        
        />}        
    </> 
    
  )
}

export default App
