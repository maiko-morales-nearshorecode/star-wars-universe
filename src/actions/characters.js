import axios from "axios";
import { STAR_WARS_CHARACTERS_ENDPOINT } from '../constants/api';

export const FETCH_CHARACTERS_START = 'FETCH_CHARACTERS_START';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';

const fetchCharactersStart = () => ({
  type: FETCH_CHARACTERS_START
});

const fetchCharactersSuccess = (characters) => ({
  type: FETCH_CHARACTERS_SUCCESS,
  payload: { characters }
});

export const fetchCharacters = () => async (dispatch) => {
  dispatch(fetchCharactersStart());
  try {
    const res = await axios.get(STAR_WARS_CHARACTERS_ENDPOINT);
    const characters = res.data.results;
    dispatch(fetchCharactersSuccess(characters));
  } catch (error) {
    console.error(error);
  }
};
