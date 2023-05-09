import { Button } from '@components/ui/Button';
import { useState } from 'react';

interface ModalPropsI {
  children: React.ReactNode;
  className: string;
  onConfirm: () => void;
  onClose: () => void;
}

const Modal: React.FC<ModalPropsI> = ({ children, className, onClose, onConfirm }) => {
  const baseClass = ['fixed top-0 left-0 flex h-screen w-screen'];
  baseClass.push(className);
  const backDropClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    onClose();
  };
  return (
    <div className={baseClass.join(' ')}>
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-gray-600 opacity-10"
        onClick={backDropClickHandler}
      />
      <div
        className="z-10 bg-white"
        onClick={(e) => {
          console.log('modal');
        }}>
        <h2>Title</h2>
        <div>some content</div>
        <div className="flex justify-between">
          <Button text="Subscribe" onClick={onConfirm} />
          <Button text="Cancel" onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
