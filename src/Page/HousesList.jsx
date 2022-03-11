import React from 'react';

import HouseCard from '../Components/HouseCard';
import './HousesList.scss';

function HousesList() {
  let arr = [
    1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5,
  ];
  return (
    <div className='card_list'>
      {arr.map((_, idx) => (
        <HouseCard key={idx} />
      ))}
    </div>
  );
}

export default HousesList;
