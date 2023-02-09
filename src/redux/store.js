import { configureStore } from '@reduxjs/toolkit';
import { persistStore} from 'redux-persist';
//import { persistReducer } from 'redux-persist';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice.js';
//import { contactsSlice } from './contactsSlice';

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

export const persistSet = {
  key: 'contact',
  storage,
}

export const persistor = persistStore(store);

//export const contactsReducer = persistReducer(persistSet, contactsSlice.reducer);
