import React from 'react';
import PT from 'prop-types';

import { HouseCard } from '../Components';
import { LOADING, SUCCESS } from '../config/statuses';
import { useSelector } from 'react-redux';
import './HousesList.scss';
import { LoadingOutlined } from '@ant-design/icons';

function HousesList(props) {
  const { housesStore } = props;
  const status = useSelector((state) => state.houses.status);

  const loading = LOADING.toLowerCase();

  return (
    <div className='card_list'>
      {status === SUCCESS ? (
        housesStore.map((item, idx) => <HouseCard {...item} key={idx} />)
      ) : (
        <span className='loading'>
          <LoadingOutlined />
          {loading[0].toUpperCase() + loading.slice(1)}...
        </span>
      )}
    </div>
  );
}

HousesList.propTypes = {
  housesStore: PT.array,
};

export default HousesList;
