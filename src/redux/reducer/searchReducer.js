import { PREV_QUERY, SEARCH_FALSE } from "../actions";

const initialState = {
  value: false,
  query: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_FALSE: {
      return {
        ...state,
        value: action.payload,
      };
    }
    case PREV_QUERY: {
      return {
        ...state,
        query: action.payload,
      };
    }
    default:
      return state;
  }
};

export default searchReducer;
