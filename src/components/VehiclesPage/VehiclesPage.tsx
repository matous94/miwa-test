import * as React from 'react';
import VehicleListItem from './VehicleListItem';
import { useGlobalState } from '../../store/store';
import EntityListView from '../EntityListView';

const VehiclesPage: React.FC = () => {
  const [globalState, actions] = useGlobalState();
  const { vehicles } = globalState;

  const sortedVehicles = React.useMemo(
    () =>
      [...vehicles].sort((a, b) => {
        if (a.maxAtmospheringSpeed === b.maxAtmospheringSpeed) return 0;
        if (a.maxAtmospheringSpeed > b.maxAtmospheringSpeed) return -1;
        return 1;
      }),
    [vehicles]
  );

  return (
    <EntityListView
      heading="Vehicles"
      getter={actions.getVehicles}
      items={sortedVehicles}
      ListItem={VehicleListItem}
    />
  );
};

export default VehiclesPage;
