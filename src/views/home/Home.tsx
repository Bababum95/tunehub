import { useEffect } from 'react';
import GroopPlayList from '../../components/GroopPlayList';
import { getTrack } from '../../core/services/spotify.service';

const Home = () => {
  useEffect(() => {
    const fetchCategoriesList = async () => {
      const test = await getTrack('5BSII2hWfTjJPXts8xcJOl');
      // const test = await getPlayback();
      // const test = await putPlay("b92737f948543e6731ecda198894dd9cfd78080a");
      // eslint-disable-next-line no-console
      console.log(test);
    };
    fetchCategoriesList();
  }, []);
  return (
    <>
      <GroopPlayList title='Top Hits' id='toplists' />
      <GroopPlayList title='Fresh Finds' id='0JQ5DAqbMKFImHYGo3eTSg' />
      <GroopPlayList title='Набирает популярность' id='0JQ5DAqbMKFQIL0AXnG5AK' />
      <GroopPlayList title='API Heritage Month' id='0JQ5DAqbMKFFgo8jQnAk7E' />
    </>
  );
};

export default Home;