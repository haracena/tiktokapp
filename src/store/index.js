import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import userSlice from './user';
import storage from 'redux-persist/lib/storage';

const reducer = combineReducers({
  user: userSlice,
});

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['user'], // poner las props que queremos guardar en el storage y las demás No se guardaran
  // blacklist: [], // poner las props que queremos evitar en el storage y las demás Si se guardan
};

const persistedReducer = persistReducer(persistConfig, reducer); // acepta solo un reducer

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
