import React from 'react';
import { List } from 'semantic-ui-react';

const CharacterEpisodes = ({ episodes = [] }) => (
  <List>
    {episodes.map(({ title, release_date, director, producer, url }) => (
      <List.Item key={url}>
        <List.Content>
          <List.Header>{title}</List.Header>
          <List.Description>
            Released in {release_date}, directed by {director} and produced by {producer}
          </List.Description>
        </List.Content>
      </List.Item>
    ))}
  </List>
);

export default CharacterEpisodes;
