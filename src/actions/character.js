import axios from 'axios';
import { STAR_WARS_CHARACTERS_ENDPOINT } from '../constants/api';

export const FETCH_CHARACTER_START = 'FETCH_CHARACTER_START';
export const FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS';

const fetchCharacterStart = () => ({
  type: FETCH_CHARACTER_START
});

const fetchCharacterSuccess = (character) => ({
  type: FETCH_CHARACTER_SUCCESS,
  payload: { character }
});

export const fetchCharacter = (id) => async (dispatch) => {
  dispatch(fetchCharacterStart());
  try {
    const url = `${STAR_WARS_CHARACTERS_ENDPOINT}/${id}`;
    const res = await axios.get(url);
    const character = res.data;
    const episodes = await Promise.all(character.films.map(film => axios.get(film)));
    character.episodes = episodes.map(episode => episode.data);
    dispatch(fetchCharacterSuccess(character));
  } catch (error) {
    console.error(error);
  }
};
