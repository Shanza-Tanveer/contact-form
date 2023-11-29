const initialState = {
  contacts: [],
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter((c) => c.id !== action.payload),
      };
    case 'READ_CONTACTS':
      return {
        ...state,
        contacts: action.payload,
      };
    default:
      return state;
  }
};

export default contactReducer;
