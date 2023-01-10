import { FC, useRef } from 'react';
import { CSSTransition } from 'react-transition-group'
import { TfiClose } from "react-icons/tfi";

type ModalMenuProps = {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    onOpen?: () => void
    onClose?: () => void
} & React.HTMLAttributes<HTMLDivElement>

const ModalMenu: FC<ModalMenuProps> = ({ isOpen, setIsOpen, onOpen, onClose, children, className, ...otherProps }) => {

    const nodeRef = useRef<HTMLDivElement>(null)

    return (
        <CSSTransition nodeRef={nodeRef} in={isOpen} timeout={1000} unmountOnExit={true} classNames={{
            enterDone: "![--width:300vmax] !inset-[calc(var(--width)/-2)]",
            enter: "![--width:300vmax] !inset-[calc(var(--width)/-2)]"
        }}
            onEnter={onOpen}
            onExited={onClose}
        >
            <div ref={nodeRef} className={`absolute z-[9999] w-[var(--width)] ml-[50%] mt-[50%] aspect-square duration-1000 transition-[width,right,left,top,bottom] ` +
                `[--width:0] inset-0 rounded-[500vmax] [clip-path:inset(0_0_0_0);] ${className}`} {...otherProps}>
                <button className={"animate-fade-in-delayed [animation-delay:250ms] opacity-0 text-2xl" +
                    " fixed top-8 right-8 p-4 aspect-square !bg-transparent hover:text-bg-secondary-light dark:hover:text-bg-secondary"}
                    onClick={() => { setIsOpen(false) }}>
                    <TfiClose />
                </button>
                <div className="animate-fade-in-delayed [animation-delay:250ms] fixed top-[50%] left-[50%] [translate:-50%_-50%]">
                    {children}
                </div>
            </div>
        </CSSTransition>
    );
};

export default ModalMenu;