import { configureStore } from '@reduxjs/toolkit';
import { persistStore} from 'redux-persist';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { filtersReducer } from './filtersSlice.js';
import {contactsSlice} from './contactsSlice.js'

const persistSet ={
  key: 'contacts',
  storage,
};

const contactsReducer = persistReducer(persistSet, contactsSlice.reducer);

export const store = configureStore({
  reducer: {
    contact: contactsReducer,
    filter: filtersReducer,
  },
  middleware (getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
},
});

export const persistor = persistStore(store);
