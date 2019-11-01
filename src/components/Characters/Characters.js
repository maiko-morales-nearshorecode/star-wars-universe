import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Icon, Pagination, Header } from 'semantic-ui-react';
import { fetchCharacters } from '../../actions/characters';
import Character from './Character';

const Characters = () => {
  const characters = useSelector(state => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  const handlePageChange = (_, data) => {
    dispatch(fetchCharacters(data.activePage));
  };

  return (
    <>
      <Header as="h2">Characters</Header>
      {characters.isLoading && <Icon name="spinner" size="large" loading />}
      {!characters.isLoading && characters.items.length > 0 &&
        <>
          <List divided relaxed selection size="huge" verticalAlign="middle">
            {characters.items.map(character => (
              <Character key={character.url} {...character} />
            ))}
          </List>
          <Pagination
            activePage={characters.page}
            totalPages={characters.totalPages}
            onPageChange={handlePageChange}
          />
        </>
      }
    </>
  );
};

export default Characters;
