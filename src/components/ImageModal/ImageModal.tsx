import Modal from'react-modal';
import { Image } from '../../types';

interface ImageModalProps {
  closeModal: () => void;
  modalImage: Image;
  modalIsOpen: boolean;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const ImageModal:React.FC<ImageModalProps> = ({ closeModal, modalImage, modalIsOpen }) => {
  return (
    <div>
         <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles} >        
        <div>
          <img height={700} src={modalImage.urls.regular} alt={modalImage.alt_description} />
       </div> 
      </Modal>
    </div>
  );
}

export default ImageModal

  


