import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import {logger} from "redux-logger"
import User from './reducers/User';
import Categories from './reducers/Categories';
import Service from './reducers/Service';
import { config } from '@fortawesome/fontawesome-svg-core';

const rootReducer = combineReducers({
  user: User,
  categories: Categories,
  service: Service,
});

const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

const persistedReducer = persistReducer(configuration, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger);
  },
});


export default store;
export const persistor = persistStore(store);
persistor.purge();
