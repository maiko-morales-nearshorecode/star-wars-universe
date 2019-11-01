import React from 'react';

const Character = ({ name, height, mass, gender }) => (
  <li>
    <div>{name}</div>
    <div>{height}</div>
    <div>{mass}</div>
    <div>{gender}</div>
  </li>
);

export default Character;
