import { persistStore, persistReducer } from 'redux-persist';
import storage from '../utils/storage';
import contactReducer from '../reducers/contactReducer';
import { configureStore } from '@reduxjs/toolkit';

const persistConfig = { key: 'root', version: 1, storage };
const persistedReducer = persistReducer(persistConfig, contactReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
      },
    }),
});
export const persistor = persistStore(store);
