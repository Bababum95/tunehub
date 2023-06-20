import { useState, useEffect } from 'react'
import { SpotyfyService } from '../core/services/spotyfy.service';
import { IHomeData } from '../core/interfeces/homeData.interfece';
import styles from './styles/Home.module.scss';
import GroopPlayList from '../components/GroopPlayList';

const Home = () => {
    const [list, setList] = useState<IHomeData[]>();
    useEffect(() => {
        const fetchCategoriesList = async () => {
            const data = await SpotyfyService.getHomePage(9, 30)
            setList(data.slice(0, 4))
        }
        fetchCategoriesList()
    }, [])
    return (
        <>
            {list && (
                <div className={styles.body}>
                    {list.map(playlists => (
                        <GroopPlayList key={playlists.id} playLists={playlists} />
                    ))}
                </div>
            )}
        </>
    )
}

export default Home