import React from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';

import './HouseCard.scss';

function HouseCard(props) {
  const { id, title, region, armsCoat } = props;

  return (
    <div className='card_block'>
      <Link to={`/houses/:${id}`}>
        <h3>{title === undefined ? 'title' : title}</h3>
        <div>
          <span>Region: </span>
          <span> {region === undefined ? 'No informations' : region}</span>
          <span>Coat of arms:</span>
          <span> {armsCoat === undefined ? 'No data' : armsCoat}</span>
        </div>
      </Link>
    </div>
  );
}

HouseCard.propTypes = {
  id: PT.number,
  title: PT.string,
  region: PT.string,
  armsCoat: PT.string,
};

export default HouseCard;
