import { FC, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group'
import { TfiClose } from "react-icons/tfi";

type ModalMenuProps = {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    onOpen?: () => void
    onClose?: () => void
} & React.HTMLAttributes<HTMLDivElement>

const ModalMenu: FC<ModalMenuProps> = ({ isOpen, setIsOpen, onOpen, onClose, children, className, ...otherProps }) => {

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.code === "Escape") {
                setIsOpen(false);
            }
        }
        
        document.addEventListener("keydown", handler)
    
        return () => {
            document.removeEventListener("keydown", handler)
        }
    }, [])
    
    
    const bgNodeRef = useRef<HTMLDivElement>(null)
    const modalContentNodeRef = useRef<HTMLDivElement>(null)

    return (
        <>
            <CSSTransition nodeRef={bgNodeRef} in={isOpen} timeout={1000} unmountOnExit={true} classNames={{
                enterDone: "![scale:1]",
                enter: "![scale:1]"
            }}
                onEnter={onOpen}
                onExited={onClose}
            >
                <div ref={bgNodeRef} className={`absolute z-[4999] w-[var(--width)] aspect-square duration-1000 transition-[scale] ` +
                    `[--width:250vmax] m-[calc(50%+var(--width)/-2)] inset-0 rounded-[500vmax] [scale:0] ${className}`} {...otherProps}>
                    
                </div>
            </CSSTransition>
            <CSSTransition nodeRef={modalContentNodeRef} in={isOpen} timeout={1000} unmountOnExit={true} classNames={{
                enter: "!opacity-100 delay-500",
                enterDone: "!opacity-100"
            }}
            >
                <div ref={modalContentNodeRef} className='z-[5000] absolute opacity-0 transition-opacity duration-500'>
                    <button className={"text-3xl sm:text-2xl hover:text-bg-secondary-light dark:hover:text-bg-secondary" +
                        " z-[inherit] fixed top-6 right-6 sm:top-8 sm:right-8 p-2 aspect-square !bg-transparent"}
                        onClick={() => { setIsOpen(false) }}>
                        <TfiClose />
                    </button>
                    <div className="z-[inherit] fixed top-[50%] left-[50%] [translate:-50%_-50%]">
                        {children}
                    </div>
                </div>
            </CSSTransition>
        </>
    );
};

export default ModalMenu;