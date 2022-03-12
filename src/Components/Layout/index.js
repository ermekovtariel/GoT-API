import React from 'react';
import { Route } from 'react-router-dom';
import { Footer, Header } from '../';

import './Layout.scss';
function Layout(props) {
  const { children, filter, setFilter } = props;

  return (
    <div className='layout_box'>
      <Header />
      <div className='layout_content'>{children}</div>
      <Route
        exact
        path={'/'}
        render={() => <Footer filterData={filter} setFilter={setFilter} />}
      />
      <Route
        exact
        path={'/person'}
        render={() => <Footer filterData={filter} setFilter={setFilter} />}
      />
    </div>
  );
}

export default Layout;
