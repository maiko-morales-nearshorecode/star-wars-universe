import React from 'react';
import { List, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

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

const getId = url => {
  const tokens = url.split('/');
  return tokens[tokens.length - 2];
}

const Character = ({ name, gender, height, mass, url, history }) => {
  const handleClick = (event) => {
    event.preventDefault();
    history.push(`/characters/${getId(url)}`);
  };

  return (
      <List.Item onClick={handleClick}>
        <List.Content>
          <List.Header>{name} <Avatar gender={gender} /></List.Header>
        </List.Content>
      </List.Item>
  );
}

export default withRouter(Character);
