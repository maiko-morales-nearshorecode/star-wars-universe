import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Icon, Card } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import { fetchCharacter } from '../../actions/character';
import CharacterEpisodes from './CharacterEpisodes';

const CharacterDetails = () => {
  const { id } = useParams();
  const character = useSelector(state => state.character);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacter(id));
  }, [id]);

  let unknownBirthYear = character.birth_year === "unknown";

  return (
    <Grid.Column>
      <h2>Details</h2>
      {character.isLoading && <Icon name="spinner" size="large" loading />}
      {!character.isLoading && id && (
        <Card raised fluid>
          <Card.Content>
            <Card.Header>About {character.name}</Card.Header>
            <Card.Description>
              {!unknownBirthYear && (
                <p>{character.name} was born in {character.birth_year} of the <strong>Galactic Standard Calendar</strong>.</p>
              )}
              {unknownBirthYear && (
                <p>We don't know when {character.name} was born.</p>
              )}
              <p>Gender: {character.gender}</p>
              <p>Eye color: {character.eye_color}</p>
              <p>Hair color: {character.hair_color}</p>
              <p>Height: {character.height} cm</p>
              <p>Mass: {character.mass} kg</p>
            </Card.Description>
          </Card.Content>
          <Card.Content>
            <Card.Header>Episodes {character.name} appears in</Card.Header>
            <Card.Description>
              <CharacterEpisodes episodes={character.episodes} />
          </Card.Description>
          </Card.Content>
        </Card>
      )}
    </Grid.Column>
  );
}

export default CharacterDetails;
