import { initialState, reducer } from "./reducer";

const createStore = (reducer, initialState) => {
  let state = initialState;

  return {
    dispatch: (action) => {
      state = reducer(state, action)
    },
    getState: () => state
  }
}

export const store = createStore(reducer, initialState)