import { useSelector , useDispatch} from 'react-redux';
import { nanoid } from 'nanoid';

import style from './App.module.css';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { FilterContact } from './Filter/Filter';

import { addContact, deleteContact, getContacts } from 'redux/contactsSlice';
import { getFilter, setFilter  } from 'redux/filtersSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const handleSubmit = (data) => {
    //const name =event.target
    const duplicate = contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase());
    if (duplicate) { return alert(`${data.name} is already in contacts`); }
    data.id = nanoid();

    dispatch(addContact(data))
  };
  
  const handleChange = event => {
    //const { value } = event.target.value;
    dispatch(setFilter(event.target.value));
  };

    const deleteContactItem = contactId => {
    dispatch(deleteContact(contactId));
};

  const getFilteredContacts = () => {
    if (!filter) return contacts;
      const filteredContact = filter?.toLowerCase();
      return contacts.filter(contact => contact.name.toLowerCase().includes(filteredContact));
    //onst normalizedFilter = filter.toLowerCase();

    //return contacts.filter(contact =>
     // contact.name
      //toLowerCase().includes(normalizedFilter)
    //);
  };

   // return filterContactsList;
  //};


  return (
    <div className= {style.mainDiv} >
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit}/>
      <h2 className={style.title}>Contacts</h2>
      <FilterContact filter={filter} handleChange={handleChange} />
      <ContactsList contacts={getFilteredContacts()} onDeleteContact={deleteContactItem}/>
    </div>
  );
};

