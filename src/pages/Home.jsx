import React, {useState, useEffect} from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./src/data/data.json')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main className="home">
      <Banner />
      <section className="cards-container">
        {data?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </section>
    </main>
  );
};

export default Home;