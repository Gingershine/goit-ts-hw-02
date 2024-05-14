import { Image } from '../../types';
import css from './ImageCard.module.css';

interface ImageCardProps {
  image: Image;
  openModal: (image: Image) => void;
}

const ImageCard:React.FC<ImageCardProps> = ({ image, openModal}) => {
 
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