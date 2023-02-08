import { createSlice} from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { nanoid } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

export const contactsInitialState = {contacts:
[
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
]};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  reducers: {
    addContact(state, action) {
     // const contact ={
     // id: nanoid(),
     // name: action.payload.name,
     // number: action.payload.number,  
   // };
    state.contacts = action.payload;
},
    deleteContact(state, action) { 
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload);      
    },
  },
},
);

const persistSet = {
    key: 'contact',
    storage,
  }

export const { addContact, deleteContact } = contactsSlice.actions;
export const getContacts = state => state.contact.contacts;
export const contactsReducer = persistReducer(persistSet, contactsSlice.reducer);
