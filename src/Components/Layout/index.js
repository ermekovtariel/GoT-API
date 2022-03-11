import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

import './Layout.scss';
function Layout(props) {
  const { children } = props;
  return (
    <div className='layout_box'>
      <Header />
      <div className='layout_content'>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
