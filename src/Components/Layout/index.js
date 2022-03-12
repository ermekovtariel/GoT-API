import React from 'react';
import { Footer, Header } from '../';

import './Layout.scss';
function Layout(props) {
  const { children, filter, setFilter } = props;

  return (
    <div className='layout_box'>
      <Header />
      <div className='layout_content'>{children}</div>
      <Footer filterData={filter} setFilter={setFilter} />
    </div>
  );
}

export default Layout;
