import { FC } from "react"
import { IHomeData } from "../core/interfeces/homeData.interfece"
import CardPlayList from "./CardPlayList"
import styles from './styles/GroopPlayList.module.scss';

interface GroopPlayListProps {
    playLists: IHomeData
}
const GroopPlayList: FC<GroopPlayListProps> = ({ playLists }) => {
    return (
        <>
            <h2 className={styles.name}>{playLists.name}</h2>
            <div className={styles.container}>
                {playLists.contents.items.slice(0, 5).map((item) => (
                    <CardPlayList
                        key={item.id}
                        image={item.images[0][0].url}
                        name={item.name}
                        description={item.description} />
                ))}
            </div>
        </>
    )
}

export default GroopPlayList