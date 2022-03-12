import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import PT from 'prop-types';

import { Layout, PersonCard } from '../Components';
import { LOADING, SUCCESS } from '../config/statuses';
import './Person.scss';

function PersonList(props) {
  const { mockData } = props;
  const { status } = useSelector((state) => state.people);

  const loading = LOADING.toLowerCase();

  return (
    <div className='card_list'>
      {status === SUCCESS ? (
        mockData?.map((item) => <PersonCard {...item} key={item?.url} />)
      ) : (
        <span className='loading'>
          <LoadingOutlined />
          {loading[0].toUpperCase() + loading.slice(1)}...
        </span>
      )}
    </div>
  );
}

PersonList.propTypes = {
  mockData: PT.array,
};

function Person() {
  const { people } = useSelector((state) => state.people);
  const [filter, setFilter] = useState('');

  const mockData = people?.filter(function (el) {
    return el?.name?.toLowerCase(filter)?.includes(filter);
  });

  console.log({ filter, mockData });

  return (
    <Layout filter={filter} setFilter={setFilter}>
      <PersonList mockData={mockData} />
    </Layout>
  );
}

export default Person;
