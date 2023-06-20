export const formatTime = (time: number | undefined): string => {
    if (time && !isNaN(time)) {
        const minutes: number = Math.floor(time / 60);
        const formatMinutes: string =
            minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds: number = Math.floor(time % 60);
        const formatSeconds: string =
            seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
};