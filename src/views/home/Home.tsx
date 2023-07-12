import { useEffect, useState } from 'react';
import { SoundCloudService } from 'core/services/soundcloud.service';
import { ISelection } from 'core/interfeces/soundcloud.interfece';
import Sections from 'components/Sections';

const Home = () => {
  const [homePageData, setHomePageData] = useState<ISelection[]>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await SoundCloudService.getHomePage();
      setHomePageData(data.selections.slice(0, 10));
    };
    fetchData();
  }, []);
  
  return (
    <div>
      {homePageData && homePageData.map((item) => (
        <Sections
          key={item.id}
          title={item.title}
          data={item.items.slice(0, 5)} />
      ))}
    </div>
  );
};

export default Home;