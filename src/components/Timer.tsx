import { FC, useEffect, useState } from 'react';

type TimerProps = {
    className?: string
    startingTime?: number
    paused?: boolean
    resetOnPauseEnd?: boolean
}

const Timer: FC<TimerProps> = ({ className, startingTime = 0, paused = false, resetOnPauseEnd = false }) => {

    const [currentSeconds, setCurrentSeconds] = useState(startingTime)

    useEffect(() => {
        const interavl = setInterval(() => {
            if (!paused) {
                setCurrentSeconds(prev => prev + 1);
            }
        }, 1000)

        return () => {
            clearInterval(interavl)
        }
    }, [paused])
    
    const minutes = Math.floor(currentSeconds / 60);
    const seconds = currentSeconds % 60
    
    useEffect(() => {
        if (!paused && resetOnPauseEnd) {
            setCurrentSeconds(0);
        }
    }, [paused])
    
    
    return (
        <span className={className} children={`${minutes}:${seconds < 10 ? "0" + seconds : seconds}`} />
    );
};

export default Timer;
