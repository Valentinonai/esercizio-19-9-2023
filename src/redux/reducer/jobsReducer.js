import { CREATE_LIST, ERROR_ALERT, ERROR_OFF, IS_LOADING_OFF, IS_LOADING_ON } from "../actions";

const initialState = {
  content: [],
  isLoading: false,
  error: false,
  errorMessage: "",
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_LIST: {
      return {
        ...state,
        content: action.payload,
      };
    }
    case IS_LOADING_ON: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case IS_LOADING_OFF: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case ERROR_ALERT: {
      return {
        ...state,
        error: true,
        errorMessage: action.payload,
      };
    }
    case ERROR_OFF: {
      return {
        ...state,
        error: action.payload,
        errorMessage: "",
      };
    }
    default:
      return state;
  }
};

export default jobsReducer;
