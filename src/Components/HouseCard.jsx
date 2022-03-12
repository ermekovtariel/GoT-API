import React from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';

import './HouseCard.scss';

function HouseCard(props) {
  const { url, region, coatOfArms, words } = props;
  // console.log(props);

  function getSubstr(str, char, pos) {
    let a = str;
    if (pos === 'after') return a.slice(a.indexOf(char) + 1);
  }

  return (
    <div className='card_block'>
      <Link to={`${getSubstr(url, 's/', 'after')}`}>
        <h3>{region === undefined ? 'title' : region}</h3>
        <div>
          <span>Coat of arms:</span>
          <span> {!coatOfArms ? 'No data' : coatOfArms}</span>
          <span>Words:</span>
          <span> {!words ? 'No words' : words}</span>
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
