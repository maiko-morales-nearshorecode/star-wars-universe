import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Icon } from 'semantic-ui-react';
import { fetchCharacters } from '../../actions/characters';
import Character from './Character';

const Characters = () => {
  const characters = useSelector(state => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  return (
    <div>
      <h1>Characters</h1>
      {characters.isLoading && <Icon name="spinner" size="large" loading />}
      {!characters.isLoading && characters.items.length > 0 &&
        <List divided relaxed selection verticalAlign="middle">
          {characters.items.map(character => (
            <Character key={character.url} {...character} />
          ))}
        </List>}
    </div>
  );
};

export default Characters;
