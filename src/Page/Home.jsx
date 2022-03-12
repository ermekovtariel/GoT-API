import React from 'react';
import { Layout } from '../Components';
import { HousesList } from './';
import { useSelector } from 'react-redux';

function Home() {
  const housesStore = useSelector((state) => state.houses.houses);
  const [filter, setFilter] = React.useState('second');
  console.log(filter);
  return (
    <Layout filter={filter} setFilter={setFilter}>
      <HousesList housesStore={housesStore} />
    </Layout>
  );
}

export default Home;
