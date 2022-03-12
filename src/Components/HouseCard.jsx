import React from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';

import './HouseCard.scss';

function HouseCard(props) {
  const { url, region, coatOfArms, words } = props;

  function getSubstr(str, char, pos) {
    let a = str;
    if (pos === 'after') {
      return a.slice(a.indexOf(char) + 2);
    }
  }
  function handleClick(str, char) {
    let a = str;

    console.log(a.slice(a.indexOf(char) + 2));
    localStorage.setItem('url', JSON.stringify(url));
  }

  return (
    <div key={url} className='card_block'>
      <Link
        onClick={() => handleClick(url, 's/', 'after')}
        to={`/house/:${getSubstr(url, 's/', 'after')}`}
      >
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
  url: PT.string,
  region: PT.string,
  coatOfArms: PT.string,
  words: PT.string,
};

export default HouseCard;
