/* eslint-disable react-hooks/exhaustive-deps */
import { LoadingOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from '../Components';
import { LOADING } from '../config/statuses';
import { getThisHouse } from '../store/House/action';

import './House.scss';

function House() {
  const dispatch = useDispatch();
  const url = JSON.parse(localStorage.getItem('url'));
  const fetchStatus = useSelector((state) => state.house.status);
  const houseStore = useSelector((state) => state.house.house);

  const loading = LOADING.toLowerCase();
  const { name, titles, coatOfArms, seats, diedOut, overlord, cadetBranches } =
    houseStore;

  useEffect(() => {
    dispatch(getThisHouse({ url }));
  }, []);

  console.log(houseStore);

  return (
    <Layout>
      {fetchStatus === LOADING ? (
        <span className='loading'>
          <LoadingOutlined />
          {loading[0].toUpperCase() + loading.slice(1)}...
        </span>
      ) : (
        <div className='house'>
          <h3>{name}</h3>
          <div className='house_info'>
            <h3>Region:</h3>
            <span>{name}</span>
            <h3>Coat Of Arms:</h3>
            <span>{coatOfArms}</span>
            <h3>Titles:</h3>
            <span>
              {titles?.[0] === '' ? (
                'No titles'
              ) : (
                <ul>
                  {titles?.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </span>
            <h3>Seats:</h3>
            <span>
              {seats?.[0] === '' ? (
                'No seats'
              ) : (
                <ul>
                  {seats?.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </span>
            <h3>Has died out:</h3>
            <span>{diedOut !== '' ? diedOut : 'No information'}</span>
            <h3>Has overlord:</h3>
            <span>{overlord !== '' ? overlord : 'No information'}</span>
            <h3>Number of Cadet Branches:</h3>
            <span>
              {cadetBranches?.[0] === '' ? 'No information' : cadetBranches}
            </span>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default House;
