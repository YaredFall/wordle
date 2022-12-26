import { FC } from 'react';
import { RiBarChart2Fill } from 'react-icons/ri'

const StatsButton: FC<React.HTMLAttributes<HTMLButtonElement>> = (props) => {
    
    return (
        <button {...props}>
            <RiBarChart2Fill />
        </button>
    );
};

export default StatsButton;
