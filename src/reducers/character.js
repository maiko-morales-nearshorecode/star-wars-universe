import { FETCH_CHARACTER_SUCCESS, FETCH_CHARACTER_START } from "../actions/character";

const initialState = {
  isLoading: false
};

const character = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CHARACTER_START:
      return { isLoading: true };
    case FETCH_CHARACTER_SUCCESS:
      return {
        ...payload.character,
        isLoading: false
      };
    default:
      return state;
  }
};

export default character;
