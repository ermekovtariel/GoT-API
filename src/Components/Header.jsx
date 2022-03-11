import React from 'react';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

import './Header.scss';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header(props) {
  const { name } = props;
  return (
    <ul className='header_block'>
      <li>{name === undefined ? 'Logo' : name}</li>
      <li className='pagination'>
        <Route
          exact
          path={'/'}
          render={() => (
            <Link to='/person'>
              <button>
                <UserOutlined />
              </button>
            </Link>
          )}
        />
        <Route
          exact
          path={'/person'}
          render={() => (
            <Link to='/'>
              <button>
                <HomeOutlined />
              </button>
            </Link>
          )}
        />
      </li>
    </ul>
  );
}

export default Header;
