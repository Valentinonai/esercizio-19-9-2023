export const ADD_COMPANY = "ADD_COMPANY";
export const DELETE_FAV = "DELETE_FAV";
export const CREATE_LIST = "CREATE_LIST";
export const SEARCH_FALSE = "SEARCH_FALSE";
export const PREV_QUERY = "PREV_QUERY";
export const IS_LOADING_ON = "IS_LOADING_ON";
export const IS_LOADING_OFF = "IS_LOADING_OFF";
export const ERROR_ALERT = "ERROR_ALERT";

export const deleteFavourite = (i) => ({ type: DELETE_FAV, payload: i });
export const addFavourite = (data) => ({ type: ADD_COMPANY, payload: data });
export const changeSearch = (bool) => ({ type: SEARCH_FALSE, payload: bool });
export const prevQuery = (data) => ({ type: PREV_QUERY, payload: data });
export const isLoadingOn = (value) => ({ type: IS_LOADING_ON, payload: value });

export const getJobs = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: CREATE_LIST, payload: data });
      } else {
        switch (response.status) {
          case 404: {
            throw new Error(`Errore ${response.status} - ${response.statusText}`);
          }
          case 401: {
            throw new Error(`Errore ${response.status} - ${response.statusText}`);
          }
          case 400: {
            throw new Error(`Errore ${response.status} - ${response.statusText}`);
          }
          default:
            throw new Error("Errore dati non trovati");
        }
      }
    } catch (error) {
      dispatch({ type: ERROR_ALERT, payload: error.message });
    } finally {
      dispatch({ type: IS_LOADING_OFF, payload: false });
    }
  };
};

export const mainSearch = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: CREATE_LIST, payload: data });
      } else {
        switch (response.status) {
          case 404: {
            throw new Error(`Errore ${response.status} - ${response.statusText}`);
          }
          case 401: {
            throw new Error(`Errore ${response.status} - ${response.statusText}`);
          }
          case 400: {
            throw new Error(`Errore ${response.status} - ${response.statusText}`);
          }
          default:
            throw new Error("Errore dati non trovati");
        }
      }
    } catch (error) {
      dispatch({ type: ERROR_ALERT, payload: error.message });
    } finally {
      dispatch({ type: IS_LOADING_OFF, payload: false });
    }
  };
};
