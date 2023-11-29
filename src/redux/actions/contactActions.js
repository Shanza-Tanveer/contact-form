export const addContact = (contact) => ({
  type: 'ADD_CONTACT',
  payload: contact,
});

export const readContacts = (contact) => ({
  type: 'READ_CONTACTS',
  payload: contact,
});

export const updateContact = (contact) => ({
  type: 'UPDATE_CONTACT',
  payload: contact,
});

export const deleteContact = (id) => ({
  type: 'DELETE_CONTACT',
  payload: id,
});
