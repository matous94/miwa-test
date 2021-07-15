import * as React from 'react';
import CharacterListItem from './CharacterListItem';
import { useGlobalState } from '../../store/store';
import EntityPage from '../EntityPage';

const CharactersPage: React.FC = () => {
  const [globalState, actions] = useGlobalState();
  const { characters } = globalState;

  const sortedCharacters = React.useMemo(
    () =>
      [...characters].sort((a, b) => {
        if (a.name === b.name) return 0;
        if (a.name < b.name) return -1;
        return 1;
      }),
    [characters]
  );

  return (
    <EntityPage
      heading="Characters"
      getItems={actions.getCharacters}
      items={sortedCharacters}
      ListItem={CharacterListItem}
    />
  );
};

export default CharactersPage;
