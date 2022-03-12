import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { HousesList } from './';
import { Layout } from '../Components';
import { getPeople } from '../store/Person/action';

function Home() {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const housesStore = useSelector((state) => state.houses.houses);

  let page = JSON.parse(localStorage.getItem('page'));
  const [getData, setGetData] = useState(true);

  useEffect(() => {
    getData && dispatch(getPeople({ page }));
    getData && setGetData(false);
    console.clear();
  }, [page]);

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
