import * as React from 'react';
import { Vehicle } from '../../types';

const VehicleListItem: React.FC<{ item: Vehicle }> = ({ item }) => {
  return (
    <li>
      <span style={{ marginRight: '12px' }}>
        <b>Name:</b> {item.name};
      </span>
      <span style={{ marginRight: '12px' }}>
        <b>Cargo capacity:</b> {item.cargoCapacity}kg;
      </span>
      <span>
        <b>Max speed:</b> {item.maxAtmospheringSpeed}km/h;
      </span>
    </li>
  );
};

export default VehicleListItem;
