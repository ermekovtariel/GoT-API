/* eslint-disable react-hooks/exhaustive-deps */
import { StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHouses } from '../store/Houses/action';
import './Footer.scss';

function Footer(props) {
  const { filter, setFilter } = props;
  const dispatch = useDispatch();
  const pageCountStore = useSelector((state) => state.houses.page);

  let page = JSON.parse(localStorage.getItem('page'));
  const [pageValue, setpageValue] = useState(page);
  const [getData, setGetData] = useState(true);
  useEffect(() => {
    setpageValue(page);
    getData && dispatch(getHouses({ page }));
    getData && setGetData(false);
  }, [page]);

  function back() {
    if (page !== 1) {
      dispatch(getHouses({ page: parseInt(pageCountStore) - 1 }));
    }
  }

  function forwar() {
    dispatch(getHouses({ page: parseInt(pageCountStore) + 1 }));
  }

  function awd(e) {
    dispatch(getHouses({ page: e }));
    setpageValue(e);
  }

  return (
    <div className='footer_block'>
      <input
        placeholder='Search'
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className='pagination'>
        <button onClick={back}>
          <StepBackwardOutlined />
        </button>
        <input
          onChange={(e) => {
            awd(e.target.value);
          }}
          value={pageValue}
          type='number'
        />
        <button onClick={forwar}>
          <StepForwardOutlined />
        </button>
      </div>
    </div>
  );
}

export default Footer;
