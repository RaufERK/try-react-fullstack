const initState = {
  list: [],
};

export const TYPES = {
  SET_LEST_FROM_SERVER: 'SET_LEST_FROM_SERVER',
};

export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    case TYPES.SET_LEST_FROM_SERVER:
      return { list: payload };
    default:
      return state;
  }
}
