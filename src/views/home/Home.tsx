import { useEffect } from 'react';
import GroopPlayList from '../../components/GroopPlayList';

const Home = () => {
  
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