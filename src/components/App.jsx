import { useSelector , useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';

import style from './App.module.css';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

import { addContact, deleteContact, getContacts } from 'redux/contactsSlice';
import { getFilter, setFilter  } from 'redux/filtersSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const handleSubmit = event => {
    const id = nanoid();
    const name = event.name;
    const number = event.number;
    const list = [...contacts];

    if (list.findIndex(contact => name === contact.name) !== -1) {
      alert(`${name} is already in contacts.`);
    } else {
      list.push({ name, id, number });
    }
 
  dispatch(addContact(list));
  };
  
  const handleChange = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

    const deleteContactItem = contactId => {
    dispatch(deleteContact(contactId));
};

  const getFilteredContacts = () => {
    const filterContactsList = contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(filter.toLowerCase());
    });

    return filterContactsList;
  };

  useEffect(() => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className= {style.mainDiv} >
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm onSbmit={handleSubmit}/>
      <h2 className={style.title}>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactsList contacts={getFilteredContacts()} onDeleteContact={deleteContactItem}/>
    </div>
  );
};

