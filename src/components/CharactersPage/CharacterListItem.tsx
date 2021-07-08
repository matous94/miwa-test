import * as React from 'react';
import { Character } from '../../types';

const CharacterListItem: React.FC<{ item: Character }> = ({ item }) => {
  return (
    <li>
      <span style={{ marginRight: '12px' }}>
        <b>Name:</b> {item.name};
      </span>
      <span style={{ marginRight: '12px' }}>
        <b>Weight:</b> {item.mass}kg;
      </span>
      <span>
        <b>Height:</b> {item.height}cm;
      </span>
    </li>
  );
};

export default CharacterListItem;
