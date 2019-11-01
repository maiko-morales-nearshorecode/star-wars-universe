import character, { initialState } from './character';
import { fetchCharacterStart, fetchCharacterSuccess } from '../actions/character';

describe('character reducer', () => {
  it('should return the initial state when current state is undefined', () => {
    expect(character(undefined, {})).toEqual(initialState);
  });

  it('should set loading to true on fetch start', () => {
    const newState = character(undefined, fetchCharacterStart());
    expect(newState.isLoading).toBe(true);
  });

  it('should set data and loading to false on fetch success', () => {
    const data = {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY'
    };
    const newState = character(undefined, fetchCharacterSuccess(data));
    expect(newState.isLoading).toEqual(false);
    expect(newState.name).toEqual(data.name);
  })
});
