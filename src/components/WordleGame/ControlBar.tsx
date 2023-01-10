import { FC } from 'react';
import Timer from '../Timer';
import ButtonWithModalMenu from '../ButtonWithModalMenu';
import { FiHelpCircle } from 'react-icons/fi';
import { IoSettingsSharp } from 'react-icons/io5';
import { MdLeaderboard } from 'react-icons/md';


type controlBarProps = {
    isTimerPaused?: boolean
    resetTimerOnPauseEnd?: boolean
    onModalOpen?: () => void
    onModalClose?: () => void
}

const controlBar: FC<controlBarProps> = ({ isTimerPaused, resetTimerOnPauseEnd, onModalOpen, onModalClose }) => {
    
    return (
        <div className={"flex flex-row pt-1 pb-2 items-center"}>
            <Timer paused={isTimerPaused} resetOnPauseEnd={resetTimerOnPauseEnd} className={"ml-1 self-end text-xl sm:text-base"} />
            <div className={"flex flex-row ml-auto gap-1 text-3xl sm:text-xl"}>
                <ButtonWithModalMenu 
                    className={"rounded-full p-1 !bg-transparent dark:hover:text-bg-secondary hover:text-bg-secondary-light"}
                    children={<FiHelpCircle />}
                    title={"Help"} 
                    modalClassName={"bg-zinc-100 dark:bg-bg-primary"}
                    modalChildren={"Help modal!"}
                    onModalOpen={onModalOpen}
                    onModalClose={onModalClose}
                />
                <ButtonWithModalMenu 
                    className={"rounded-full p-1 !bg-transparent dark:hover:text-bg-secondary hover:text-bg-secondary-light"}
                    children={<MdLeaderboard />}
                    title={"Statistics"} 
                    modalClassName={"bg-zinc-100 dark:bg-bg-primary"}
                    modalChildren={"Stats modal!"}
                    onModalOpen={onModalOpen}
                    onModalClose={onModalClose}
                />
                <ButtonWithModalMenu 
                    className={"rounded-full p-1 !bg-transparent dark:hover:text-bg-secondary hover:text-bg-secondary-light"}
                    children={<IoSettingsSharp />}
                    title={"Settings"} 
                    modalClassName={"bg-zinc-100 dark:bg-bg-primary"}
                    modalChildren={"Settings modal!"}
                    onModalOpen={onModalOpen}
                    onModalClose={onModalClose}
                />  
            </div>
        </div>
    );
};

export default controlBar;
