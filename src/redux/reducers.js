import { EMPLOYEES_LOADED, LAUNCH_FETCH } from './constants';

export const initialState = {
  employees: [],
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      // CAREFUL: You can't modify state variable directly.
      return Object.assign({}, state, { employees });
    }
    case LAUNCH_FETCH : {
      {...state, loading: action.payload};
    }
    default:
        return state
  }
}

export default appReducer;