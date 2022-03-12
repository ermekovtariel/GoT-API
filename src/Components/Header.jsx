import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  LeftCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import PT from 'prop-types';

import './Header.scss';

function Header(props) {
  const { name } = props;
  return (
    <ul className='header_block'>
      <li>
        <Route
          exact
          path={'/house/:id'}
          render={(e) => (
            <Link key={e} className='header_back_button' to='/'>
              <LeftCircleOutlined />
            </Link>
          )}
        />
        <Route
          exact
          path={'/'}
          render={(e) => (
            <Link key={e} to='/'>
              {name === undefined ? 'Logo' : name}
            </Link>
          )}
        />
        <Route
          exact
          path={'/person'}
          render={(e) => (
            <Link key={e} to='/'>
              {name === undefined ? 'Logo' : name}
            </Link>
          )}
        />
      </li>
      <li className='pagination'>
        <Route
          exact
          path={'/'}
          render={(e) => (
            <div key={e} className='header_route_button'>
              <span>Switch to: </span>
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
              <span>Switch to: </span>
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
// name

Header.propTypes = {
  name: PT.string,
};

export default Header;
