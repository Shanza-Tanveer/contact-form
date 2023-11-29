import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/actions/contactActions';
import Update from './Update';

const Read = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [editable, setEditable] = useState(null);
  const contacts = useSelector((state) => state.contacts);
  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };
  const editHandler = (data, e) => {
    e.preventDefault();
    setShowModal(true);
    setEditable(data);
  };

  return (
    <div className='grid justify-center gap-y-7'>
      <h1 className='text-4xl font-semibold text-center text-white mt-8'>
        All Contact
      </h1>
      <div>
        <table className='border-separate  border-spacing-2'>
          <thead>
            <tr>
              <th className='border border-slate-500 bg-slate-600 p-2 text-white text-start w-24'>
                Id
              </th>
              <th className='border border-slate-500 bg-slate-600 p-2 text-white text-start w-80'>
                Name
              </th>
              <th className='border border-slate-500 bg-slate-600 p-2 text-white text-start w-64'>
                Phone. No
              </th>
            </tr>
          </thead>
          {contacts &&
            contacts.map((c) => {
              return (
                <tbody>
                  <tr>
                    <td className='border border-slate-500 bg-slate-800 p-2 text-slate-400'>
                      {c.id}
                    </td>
                    <td className='border border-slate-500 bg-slate-800 p-2 text-slate-400'>
                      {c.name}
                    </td>
                    <td className='border border-slate-500 bg-slate-800 p-2 text-slate-400'>
                      {c.number}
                    </td>
                    <td className='border border-blue-900 hover:border-blue-900 rounded-md bg-blue-800 hover:bg-blue-900 p-2 cursor-pointer w-16 text-center shadow-sm'>
                      <button
                        type='button'
                        className='text-slate-50 cursor-pointer'
                        onClick={(e) => editHandler(c, e)}
                      >
                        Edit
                      </button>
                    </td>
                    <td className='border border-rose-800 hover:border-rose-900 rounded-md bg-rose-800 hover:bg-rose-900 p-2 cursor-pointer w-20 text-center shadow-sm'>
                      <button
                        type='button'
                        className='text-slate-50 cursor-pointer'
                        onClick={() => handleDeleteContact(c.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </div>
      {showModal && editable && (
        <Update
          contact={editable}
          modalClose={setShowModal}
          clearState={setEditable}
        />
      )}
    </div>
  );
};

export default Read;
