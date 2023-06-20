import { RefObject } from 'react';
import { formatTime } from '../asets/funcations/formatTime';
import styles from './styles/ProgressBar.module.scss';

interface ProgressBarProps {
    progressBarRef: RefObject<HTMLInputElement>;
    audioRef: RefObject<HTMLAudioElement>
    timeProgress: number
    duration: number
}

const ProgressBar = ({ progressBarRef, audioRef, timeProgress, duration }: ProgressBarProps) => {
    const handleProgressChange = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = Number(progressBarRef.current?.value);
        }
    };
    return (
        <div className={styles.progress}>
            <span className={styles.time}>{formatTime(timeProgress)}</span>
            <input
                ref={progressBarRef}
                className={styles.ststus}
                type="range"
                defaultValue="0"
                onChange={handleProgressChange} />
            <span className={styles.time}>{formatTime(duration)}</span>
        </div>
    )
}

export default ProgressBar