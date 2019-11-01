import { FETCH_CHARACTERS_SUCCESS } from "../actions/characters";

const initialState = {
  items: [],
  isLoading: false
};

const characters = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CHARACTERS_SUCCESS:
      return { ...state, items: payload.characters };
    default:
      return state;
  }
};

export default characters;
