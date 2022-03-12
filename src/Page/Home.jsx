import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { HousesList } from './';
import { Layout } from '../Components';

function Home() {
  const [filter, setFilter] = useState('');
  const housesStore = useSelector((state) => state.houses.houses);

  const mockData = housesStore?.filter(function (el) {
    return el?.region?.toLowerCase(filter)?.includes(filter);
  });

  return (
    <Layout filter={filter} setFilter={setFilter}>
      <HousesList housesStore={mockData} />
    </Layout>
  );
}

export default Home;
