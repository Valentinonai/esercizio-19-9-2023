import { ADD_COMPANY, DELETE_FAV } from "../actions";

const initialState = {
  favourites: {
    azienda: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPANY: {
      if (state.favourites.azienda.length > 0) {
        const x = state.favourites.azienda.find((x) => x._id === action.payload._id);
        console.log(x);
        if (!x) {
          return {
            ...state,
            favourites: { ...state.favourites, azienda: [...state.favourites.azienda, action.payload] },
          };
        }
      } else {
        return {
          ...state,
          favourites: { ...state.favourites, azienda: [...state.favourites.azienda, action.payload] },
        };
      }
    }
    // eslint-disable-next-line no-fallthrough
    case DELETE_FAV: {
      return {
        ...state,
        favourites: {
          ...state.favourites,
          azienda: state.favourites.azienda.filter((elem, i) => i !== action.payload),
        },
      };
    }
    default:
      return state;
  }
};

export default mainReducer;
