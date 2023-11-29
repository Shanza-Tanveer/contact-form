// import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { addContact } from '../redux/actions/contactActions';
import axios from 'axios';

const Create = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [records, setRecords] = useState([]);
  useEffect(() => {
    axios
      .get('http://16.170.27.13:4000/api/fetch/all/conversations/0')
      .then((resp) => {
        setRecords(resp.data.data);
        console.log(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  // const handleAddContact = () => {
  //   const newContact = {
  //     id: Date.now(),
  //     name,
  //     number,
  //   };
  //   dispatch(addContact(newContact));
  //   setName('');
  //   setNumber('');
  //   console.log(newContact);
  //   navigate('/read');
  // };

  return (
    <div className='grid grid-flow-row content-center h-screen gap-y-12'>
      {/* <h1 className='text-4xl font-semibold text-center text-white'>
        Create Contact
      </h1>
      <form>
        <div className='flex justify-center	gap-x-3'>
          <input
            type='text'
            name='username'
            id='username'
            autoComplete='username'
            className='"placeholder:italic placeholder:text-gray-500 block bg-gray-800 w-80 border border-gray-700 rounded-md py-2 px-3 shadow-inner focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base text-white'
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type='number'
            name='number'
            id='number'
            autoComplete='number'
            className='"placeholder:italic placeholder:text-gray-500 block bg-gray-800 w-80 border border-gray-700 rounded-md py-2 px-3 shadow-inner focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-base text-white'
            placeholder='Enter phone number'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <button
            type='button'
            className='text-white font-bold bg-green-700 hover:bg-green-800 rounded-md cursor-pointer shadow-sm py-2 px-4'
            onClick={handleAddContact}
          >
            Add
          </button>
        </div>
      </form> */}
      <p>
        {records.map((e) => {
          return <p>{JSON.stringify(e, 0, 2)}</p>;
        })}
      </p>
    </div>
  );
};

export default Create;
