import { Button } from '@components/ui/Button';
import classNames from 'classnames';
import { useState } from 'react';

interface ModalPropsI {
  children: React.ReactNode;
  className: string;
  backdropClassName?: string;
  modalClassName?: string;
  onClose: () => void;
}

const Modal: React.FC<ModalPropsI> = ({
  children,
  className,
  backdropClassName = 'bg-gray-600 opacity-10',
  modalClassName = 'bg-white',
  onClose,
}) => {
  const backDropClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    onClose();
  };
  return (
    <div className={classNames('fixed top-0 left-0 flex h-screen w-screen', className)}>
      <div
        className={classNames('fixed top-0 left-0 w-screen h-screen', backdropClassName)}
        onClick={backDropClickHandler}
      />
      <div className={classNames('z-10 ', modalClassName)}>{children}</div>
    </div>
  );
};

export default Modal;
