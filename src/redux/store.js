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

import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice.js';

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
