import { StepBackwardOutlined, StepForwardOutlined } from '@ant-design/icons';
import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className='footer_block'>
      <input placeholder='Search' />
      <div className='pagination'>
        <button>
          <StepBackwardOutlined />
        </button>
        <button>
          <StepForwardOutlined />
        </button>
      </div>
    </div>
  );
}

export default Footer;
