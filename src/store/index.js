/* eslint-disable import/no-extraneous-dependencies */
import createSagaMiddleware from '@redux-saga/core';
import storage from 'redux-persist/lib/storage';

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import rootReducers from './reducers';

import { watchSagas } from './sagas';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    sagaMiddleware,
  ],
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(watchSagas);

export const persistor = persistStore(store);

export default store;
