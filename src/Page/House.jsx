import { LoadingOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from '../Components';
import { LOADING } from '../config/statuses';
import { getThisHouse } from '../store/House/action';

function House() {
  const dispatch = useDispatch();
  const url = JSON.parse(localStorage.getItem('url'));
  const fetchStatus = useSelector((state) => state.house.status);
  const houseStore = useSelector((state) => state.house.house);
  const loading = LOADING.toLowerCase();

  useEffect(() => {
    dispatch(getThisHouse({ url }));
  }, []);

  console.log(houseStore);

  return (
    <Layout>
      {fetchStatus === LOADING ? (
        <span
          style={{ textAlign: 'center', display: 'block' }}
          className='loading'
        >
          <LoadingOutlined />
          {loading[0].toUpperCase() + loading.slice(1)}...
        </span>
      ) : (
        <h3>{houseStore.name}</h3>
      )}
    </Layout>
  );
}

export default House;
