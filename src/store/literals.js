const defaultState = {};

const LOAD_LITERALS = 'frontendStyleguide/LOAD_LITERALS';

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case LOAD_LITERALS:
      return payload;
    default:
      return state;
  }
};

export const loadLiterals = literals => {
  return {
    type: LOAD_LITERALS,
    payload: literals,
  };
};
