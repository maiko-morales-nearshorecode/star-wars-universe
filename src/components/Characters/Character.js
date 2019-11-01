import React from 'react';
import { List, Icon } from 'semantic-ui-react';

const GENDER = {
  MALE: 'male',
  FEMALE: 'female',
  NA: 'n/a'
};

const Avatar = ({ gender }) => {
  let iconName;
  switch (gender) {
    case GENDER.MALE:
      iconName = "man";
      break;
    case GENDER.FEMALE:
      iconName = "woman";
      break;
    case GENDER.NA:
      iconName = "android";
      break;
    default:
      return null;
  }
  return <Icon name={iconName} />;
};

const Character = ({ name, gender, height, mass }) => (
  <List.Item>
    <List.Content>
      <List.Header>{name} <Avatar gender={gender} /></List.Header>
      <span>{height} cm</span>
      <span> | </span>
      <span>{mass} kg</span>
    </List.Content>
  </List.Item>
);

export default Character;
