import { createSlice} from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';


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
    addContact(state, action) {
      state.contacts.push(action.payload)
  },
    deleteContact(state, action) { 
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload);      
    },
  },
},
);

export const { addContact, deleteContact } = contactsSlice.actions;
export const getContacts = state => state.contact.contacts;
