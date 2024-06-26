import React, {useState, useEffect} from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import HomeBanner from '../assets/images/banner-img.jpg';

import data from '../data/data.json';

const Home = () => {
  const [lodging, setLodging] = useState([]);

  useEffect(() => {
    setLodging(data);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main className="home">
      <Banner text='Chez vous, partout et ailleurs' image={HomeBanner}/>
      <section className="cards-container">
        { lodging?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </section>
    </main>
  );
};

export default Home;