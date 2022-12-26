import { FC } from 'react';
import { IoSettingsSharp } from "react-icons/io5"

const SettingsButton: FC<React.HTMLAttributes<HTMLButtonElement>> = (props) => {
    
    return (
        <button {...props}>
            <IoSettingsSharp />
        </button>
    );
};

export default SettingsButton;
