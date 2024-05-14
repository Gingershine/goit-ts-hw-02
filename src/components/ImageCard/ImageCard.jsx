import css from './ImageCard.module.css';

const ImageCard = ({ image, openModal}) => {
 
  const handleClick = () => {
  openModal(image);
}
  
  return (
      <div className={css.ImageCardWraper}>
          <img className={css.ImageCard} onClick={handleClick} src={image.urls.small} alt={image.alt_description} />		
      </div>
  )
}

export default ImageCard