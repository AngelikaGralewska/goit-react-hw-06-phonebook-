
import style from './ContactsList.module.css';



export const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul className={style.contactsList}>
  {contacts.map((contact, id) => (
    <li key={id} className={style.contactsListItem}>
      <p>
        <span className={style.contactsListName}>{contact.name}</span>
        <span className={style.contactsListName}>{contact.number}</span>
      </p>
      <button
        className={style.buttonDelete}
        type="submit"
        onClick={() => onDeleteContact(contact.id)}
      >
        delete
      </button>
    </li>
  ))}
</ul>
  );


