import storage from 'redux-persist/lib/storage';
// import { createWebStorage } from 'redux-persist/storage';

// const createNoopStorage = () => {
//   return {
//     getItem(_key) {
//       return Promise.resolve(null);
//     },
//     setItem(_key, value) {
//       return Promise.resolve(value);
//     },
//     removeItem(_key) {
//       return Promise.resolve();
//     },
//   };
// };

// export const createStorage = () => {
//   if (typeof localStorage !== 'undefined') {
//     return createWebStorage('local');
//   }
//   return createNoopStorage();
// };
export default storage;
