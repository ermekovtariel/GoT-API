import React from 'react';
import Layout from '../Components/Layout';
import HousesList from './HousesList';

function Home() {
  return (
    <div>
      <Layout>
        <HousesList />
      </Layout>
    </div>
  );
}

export default Home;
