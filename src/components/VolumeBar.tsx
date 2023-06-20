import { useState, useEffect, RefObject } from 'react'
import classNames from 'classnames';
import styles from './styles/VolumeBar.module.scss';
let prevVolume: number = 60

interface VolumeBarProps {
    audioRef: RefObject<HTMLAudioElement>
}

const VolumeBar = ({ audioRef }: VolumeBarProps) => {
    const [volume, setVolume] = useState<number>(60);
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume / 100;
        }
    }, [volume, audioRef]);
    const handleToggleVolume = () => {
        if (volume) {
            prevVolume = volume
            setVolume(0)
        } else {
            setVolume(prevVolume)
        }
    }
    return (
        <div className={styles.volumeBar}>
            <button
                className={classNames(styles.volume, { [styles.active]: volume })}
                onClick={handleToggleVolume}
            />
            <input
                className={styles.volumeIndicator}
                style={{
                    backgroundSize: `${volume}% 100%`
                }}
                type="range"
                min={0}
                max={100}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
            />
        </div>

    )
}



export default VolumeBar