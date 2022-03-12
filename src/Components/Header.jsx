import React from 'react';
import {
  HomeOutlined,
  LeftCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';

import './Header.scss';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header(props) {
  const { name } = props;
  return (
    <ul className='header_block'>
      <li>
        <Route
          exact
          path={'/house/:id'}
          render={() => (
            <Link className='header_back_button' to='/'>
              <LeftCircleOutlined />
            </Link>
          )}
        />
        <Route
          exact
          path={'/'}
          render={() => (
            <Link to='/'>{name === undefined ? 'Logo' : name}</Link>
          )}
        />
        <Route
          exact
          path={'/person'}
          render={() => (
            <Link to='/'>{name === undefined ? 'Logo' : name}</Link>
          )}
        />
      </li>
      <li className='pagination'>
        <Route
          exact
          path={'/'}
          render={() => (
            <div className='header_route_button'>
              <span>svitche to: </span>
              <Link to='/person'>
                <button>
                  <UserOutlined />
                </button>
              </Link>
            </div>
          )}
        />
        <Route
          exact
          path={'/person'}
          render={() => (
            <div className='header_route_button'>
              <span>svitche to: </span>
              <Link to='/'>
                <button>
                  <HomeOutlined />
                </button>
              </Link>
            </div>
          )}
        />
      </li>
    </ul>
  );
}

export default Header;
