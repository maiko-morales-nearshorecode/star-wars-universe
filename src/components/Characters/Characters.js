import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, List, Icon, Pagination } from 'semantic-ui-react';
import { fetchCharacters } from '../../actions/characters';
import Character from './Character';
import CharacterDetails from '../CharacterDetails/CharacterDetails';

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
      <Grid container columns={2}>
        <Grid.Column>
        <h1>Characters</h1>
          {characters.isLoading && <Icon name="spinner" size="large" loading />}
          {!characters.isLoading && characters.items.length > 0 &&
            <>
              <List divided relaxed selection verticalAlign="middle">
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
        </Grid.Column>
        <Grid.Column>
          <CharacterDetails />
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Characters;
