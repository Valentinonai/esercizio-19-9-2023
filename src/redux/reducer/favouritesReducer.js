/* eslint-disable no-fallthrough */
import { ADD_COMPANY, DELETE_FAV } from "../actions";

const initialState = {
  azienda: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPANY: {
      if (state.azienda.length > 0) {
        const x = state.azienda.find((x) => x._id === action.payload._id);
        console.log(x);
        if (!x) {
          return {
            ...state,
            azienda: [...state.azienda, action.payload],
          };
        }
      } else {
        return {
          ...state,
          azienda: [...state.azienda, action.payload],
        };
      }
    }
    case DELETE_FAV: {
      return {
        ...state,
        azienda: state.azienda.filter((compName) => compName.company_name !== action.payload),
      };
    }
    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
};

export default favouritesReducer;
