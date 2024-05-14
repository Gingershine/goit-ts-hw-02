import Modal from'react-modal';

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

const ImageModal = ({ closeModal, modalImage, modalIsOpen }) => {
  console.log(modalImage);
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

  


