import { FC } from 'react';
import Timer from '../Timer';
import SettingsButton from '../SettingsButton';
import HelpButton from '../HelpButton';
import StatsButton from '../StatsButton';


type controlBarProps = {

}

const controlBar: FC<controlBarProps> = ({ }) => {
    
    return (
        <div className={"flex flex-row pt-1 pb-2 items-center"}>
            <Timer className={"ml-1 self-end text-xl sm:text-base"} />
            <div className={"flex flex-row ml-auto gap-1 text-3xl sm:text-xl"}>
                <HelpButton className={"rounded-full p-1 bg-transparent"} />
                <StatsButton className={"rounded-full p-1 bg-transparent"} />
                <SettingsButton className={"rounded-full p-1 bg-transparent"} />
            </div>
        </div>
    );
};

export default controlBar;
