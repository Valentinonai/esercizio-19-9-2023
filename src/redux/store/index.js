import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
// import mainReducer from "../reducer";
import favouritesReducer from "../reducer/favouritesReducer";
import jobsReducer from "../reducer/jobsReducer";
import searchReducer from "../reducer/searchReducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  storage: storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_LOCALSTORAGEKEY,
    }),
  ],
};

const rootReducer = combineReducers({
  jobs: jobsReducer,
  favourites: favouritesReducer,
  search: searchReducer,
});

const persistedReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducers,
  middleware: getDefaultMiddleware({ serializableCheck: false }),
});

export const persiStore = persistStore(store);
