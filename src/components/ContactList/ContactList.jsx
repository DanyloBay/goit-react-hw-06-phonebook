import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getFilter, getContacts } from '../../redux/selectors'
import { deleteContact} from '../../redux/contacts-slice';
import Contact from '../Contact/Contact';
import { Item } from './ContactList.styled';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const deleteSelectedContact = contactId => dispatch(deleteContact(contactId));

  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContactList = filtredContacts();

  return (
    <ul>
      {filteredContactList.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Contact
              name={name}
              number={number}
              onDeleteContact={() => deleteSelectedContact(id)}
              contactId={id}
            />
          </Item>
        );
      })}
    </ul>
  );
}

export default ContactList;
