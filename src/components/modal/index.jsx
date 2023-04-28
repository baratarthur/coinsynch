import ReactModal from 'react-modal';
import { Button } from '../button';

ReactModal.setAppElement('#__next');

export function Modal({ isOpen, onClose, children }) {
  const modalCloseButtonStyle = {
    position: 'absolute',
    right: '8px',
    top: '8px',
  }

  return (
    <ReactModal testId='modal'
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: '5'
        },
        content: {
          position: 'relative',
          width: 'min(80%, 450px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }
      }}
    >
      <Button transparent
        label='X'
        style={modalCloseButtonStyle}
        click={onClose}/>
      {children}
    </ReactModal>
  );
}