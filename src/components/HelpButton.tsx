import React, { FC } from 'react';
import { FaRegQuestionCircle } from 'react-icons/fa'

const HelpButton: FC<React.HTMLAttributes<HTMLButtonElement>> = (props) => {
    
    return (
        <button {...props}>
            <FaRegQuestionCircle/>
        </button>
    );
};

export default HelpButton;
