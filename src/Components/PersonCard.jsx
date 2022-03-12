import React from 'react';

import '../Page/Person.scss';

function PersonCard(props) {
  const { name, culture, gender, books, aliases, allegiances, died, born } =
    props;
  return (
    <div className='card_block'>
      <div>
        <h3>{name ? name : 'No name'}</h3>
        <div>
          <span>Name:</span>
          <span> {name ? name : 'No name'}</span>
          <span>Culture:</span>
          <span> {culture ? culture : 'No culture'}</span>
          <span>Gender:</span>
          <span> {gender ? gender : 'No gender'}</span>
          <span>Born:</span>
          <span> {born ? born : 'No info'}</span>
          <span>Died:</span>
          <span> {died ? died : 'No info'}</span>
          <span>Books:</span>
          <span>
            {books?.[0] ? (
              <ul>
                {books?.map((item, idx) => (
                  <li key={idx}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              'No books'
            )}
          </span>
          <span>Aliases:</span>
          <span>
            {aliases?.[0] ? (
              <ul>
                {aliases?.map((item, idx) => (
                  <li key={idx}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              'No aliases'
            )}
          </span>
          <span>All Egiances:</span>
          <span>
            {allegiances?.[0] ? (
              <ul>
                {allegiances?.map((item, idx) => (
                  <li key={idx}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              'No all egiances'
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PersonCard;
