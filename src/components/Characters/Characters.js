import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
      <ul>
        {characters.items.map(character => (
          <Character key={character.url} {...character} />
        ))}
      </ul>
    </div>
  );
};

export default Characters;
