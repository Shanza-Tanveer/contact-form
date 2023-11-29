import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from '../redux/actions/contactActions';

const Update = ({ contact, modalClose, clearState }) => {
  const dispatch = useDispatch();
  const [updatedContact, setUpdatedContact] = useState(contact);
  console.log('updatedContact', updatedContact);
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateContact(updatedContact));
    console.log('clicked', updatedContact);
    modalClose(false);
    clearState(null);
  };
  useEffect(() => {
    setUpdatedContact(contact);
  }, [contact]);
  return (
    <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity flex justify-center items-center shadow-inner'>
      {updatedContact && (
        <form className='bg-white rounded-md px-20 pt-10 pb-20'>
          <div className='flex flex-col justify-center gap-y-7'>
            <h1 className='text-4xl font-semibold text-center text-black'>
              Edit
            </h1>
            <input
              type='text'
              name='username'
              id='username'
              autoComplete='username'
              className='"placeholder:italic placeholder:text-slate-400 block bg-white w-80 border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"'
              placeholder='Enter name'
              value={updatedContact.name}
              onChange={(e) =>
                setUpdatedContact({ ...updatedContact, name: e.target.value })
              }
            />
            <input
              type='number'
              name='number'
              id='number'
              autoComplete='number'
              className='"placeholder:italic placeholder:text-slate-400 block bg-white w-80 border border-slate-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"'
              placeholder='Enter phone number'
              value={updatedContact.number}
              onChange={(e) =>
                setUpdatedContact({ ...updatedContact, number: e.target.value })
              }
            />
            <button
              type='button'
              className='text-slate-50 font-bold bg-indigo-500 hover:bg-indigo-400 rounded-md cursor-pointer py-2 shadow-sm'
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Update;
