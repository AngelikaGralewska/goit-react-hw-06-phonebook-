import { createSlice} from '@reduxjs/toolkit';
//import { persistReducer } from 'redux-persist';
import { nanoid } from '@reduxjs/toolkit';
//import storage from 'redux-persist/lib/storage';


export const contactsInitialState = {contacts:
[
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
]};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  reducers: {
<<<<<<< Updated upstream
    addContact({ contacts }, { payload }) {
      contacts.push(payload);
    },
=======
    addContact(state, action) {
      state.contacts = [action.payload, ...state.contacts]
      ///state.contacts = action.payload;
  },
>>>>>>> Stashed changes
    deleteContact(state, action) { 
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload);      
    },
  },
},
);



//export const contactsReducer = persistReducer(persistSet, contactsSlice.reducer);

export const { addContact, deleteContact } = contactsSlice.actions;
export const getContacts = state => state.contact.contacts;

