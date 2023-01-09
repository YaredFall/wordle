import { FC } from 'react';
import Timer from '../Timer';
import SettingsButton from '../SettingsButton';
import HelpButton from '../HelpButton';
import StatsButton from '../StatsButton';


type controlBarProps = {
    pauseTimer?: boolean
    resetTimerOnPauseEnd?: boolean
}

const controlBar: FC<controlBarProps> = ({ pauseTimer, resetTimerOnPauseEnd }) => {
    
    return (
        <div className={"flex flex-row pt-1 pb-2 items-center"}>
            <Timer paused={pauseTimer} resetOnPauseEnd={resetTimerOnPauseEnd} className={"ml-1 self-end text-xl sm:text-base"} />
            <div className={"flex flex-row ml-auto gap-1 text-3xl sm:text-xl"}>
                <HelpButton className={"rounded-full p-1 !bg-transparent transition-colors " + 
                    "text-text-primary-light hover:text-bg-secondary-light dark:text-text-primary dark:hover:text-bg-secondary"} title={"Help"} />
                <StatsButton className={"rounded-full p-1 !bg-transparent transition-colors dark:hover:text-bg-secondary " + 
                    "text-text-primary-light hover:text-bg-secondary-light dark:text-text-primary dark:hover:text-bg-secondary"} title={"Statistic"}/>
                <SettingsButton className={"rounded-full p-1 !bg-transparent transition-colors dark:hover:text-bg-secondary " + 
                    "text-text-primary-light hover:text-bg-secondary-light dark:text-text-primary dark:hover:text-bg-secondary"} title={"Settings"}/>
            </div>
        </div>
    );
};

export default controlBar;
