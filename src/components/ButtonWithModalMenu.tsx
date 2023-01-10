import React, { FC, useState } from 'react';
import ModalMenu from './ModalMenu';


type ButtonWithModalMenuProps = {
    modalChildren?: React.ReactNode
    modalClassName?: string
    onModalOpen?: () => void
    onModalClose?: () => void
} & React.HTMLAttributes<HTMLDivElement>

const ButtonWithModalMenu: FC<ButtonWithModalMenuProps> = ({ className, modalClassName, children, modalChildren = null, title, onModalOpen, onModalClose, ...otherProps }) => {
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={"relative [line-height:0] "} {...otherProps}>
            <ModalMenu isOpen={isModalOpen} setIsOpen={setIsModalOpen} className={modalClassName} onOpen={onModalOpen} onClose={onModalClose}>
                {modalChildren}
            </ModalMenu>
            <button className={className} onClick={() => setIsModalOpen(true)} title={title}>
                {children}
            </button>
        </div>
    );
};

export default ButtonWithModalMenu;
