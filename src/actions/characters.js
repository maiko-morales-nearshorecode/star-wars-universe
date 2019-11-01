import axios from 'axios';
import qs from 'qs';
import { STAR_WARS_CHARACTERS_ENDPOINT } from '../constants/api';

export const FETCH_CHARACTERS_START = 'FETCH_CHARACTERS_START';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';

const fetchCharactersStart = () => ({
  type: FETCH_CHARACTERS_START
});

const fetchCharactersSuccess = (characters, page, count) => ({
  type: FETCH_CHARACTERS_SUCCESS,
  payload: { characters, page, count }
});

export const fetchCharacters = (page = 1) => async (dispatch) => {
  dispatch(fetchCharactersStart());
  const query = { page };
  try {
    const url = `${STAR_WARS_CHARACTERS_ENDPOINT}?${qs.stringify(query)}`;
    const res = await axios.get(url);
    const characters = res.data.results;
    const count = res.data.count;
    dispatch(fetchCharactersSuccess(characters, page, count));
  } catch (error) {
    console.error(error);
  }
};
