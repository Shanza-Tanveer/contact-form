import { Routes, Route } from 'react-router-dom';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Create />} />
        <Route path={'/read'} element={<Read />} />
        <Route path={'/update'} element={<Update />} />
      </Routes>
    </>
  );
}

export default App;
