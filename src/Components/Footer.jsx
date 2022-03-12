/* eslint-disable react-hooks/exhaustive-deps */
import { StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { getPeople } from '../store/Person/action';
import { getHouses } from '../store/Houses/action';
import './Footer.scss';

function Footer(props) {
  const { filter, setFilter } = props;
  const dispatch = useDispatch();
  const pageCountStore = useSelector((state) => state.houses.page);
  const pagePeopleCountStore = useSelector((state) => state.people.page);

  let page = JSON.parse(localStorage.getItem('page'));
  const [pageValue, setpageValue] = useState(page);
  const [getData, setGetData] = useState(true);

  useEffect(() => {
    setpageValue(page);
    getData && dispatch(getHouses({ page }));
    // getData && dispatch(getPeople({ page }));
    getData && setGetData(false);
    console.clear();
  }, [page]);

  function back() {
    if (page !== 1) {
      dispatch(getHouses({ page: parseInt(pageCountStore) - 1 }));
      dispatch(getPeople({ page: parseInt(pagePeopleCountStore) - 1 }));
    }
  }

  function forwar() {
    dispatch(getHouses({ page: parseInt(pageCountStore) + 1 }));
    dispatch(getPeople({ page: parseInt(pagePeopleCountStore) + 1 }));
  }

  function awd(e) {
    dispatch(getHouses({ page: e }));
    dispatch(getPeople({ page: e }));
    setpageValue(e);
  }

  return (
    <div className='footer_block'>
      <input
        placeholder='Search'
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <Route
        exact
        path={'/'}
        render={() => (
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
        )}
      />
      <Route
        exact
        path={'/person'}
        render={() => (
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
        )}
      />
    </div>
  );
}

export default Footer;
