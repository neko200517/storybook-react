import { useState } from 'react';
import { Button } from '../../atoms/button/Button';
import './Modal.scss';

interface ModalProps {
  header?: React.ReactNode;
  content?: React.ReactNode;
  onOk?: () => void;
  onCancel?: () => void;
}

export const Modal = ({ header, content, onOk, onCancel }: ModalProps) => {
  const [show, setShow] = useState(false);

  const hideModal = () => {
    setShow(false);
  };

  const showModal = () => {
    setShow(true);
  };

  return (
    <>
      <Button size='small' onClick={showModal}>
        ダイアログ表示
      </Button>
      <div
        className={`modal-layer ${show ? 'modal-layer--show' : ''}`}
        onClick={(e) => {
          if ((e.target as HTMLDivElement).className.includes('modal-layer')) {
            show && hideModal();
          }
        }}
      >
        <div className='modal'>
          <div className='modal__header'>{header}</div>
          <div className='modal__content'>{content}</div>
          <div className='modal__footer'>
            <Button
              className='modal__footer-btn'
              variant='basic'
              onClick={() => {
                if (onCancel) onCancel();
                hideModal();
              }}
              size='small'
            >
              キャンセル
            </Button>
            <Button
              className='modal__footer-btn'
              variant='primary'
              onClick={(e) => {
                if (onOk) onOk();
                hideModal();
              }}
              size='small'
            >
              OK
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
