import { FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_START } from "../actions/characters";

const initialState = {
  items: [],
  isLoading: false
};

const characters = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CHARACTERS_START:
      return { items: [], isLoading: true };
    case FETCH_CHARACTERS_SUCCESS:
      return { items: payload.characters, isLoading: false };
    default:
      return state;
  }
};

export default characters;
