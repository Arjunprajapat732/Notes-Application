import './App.css';
import Notes from './Notes/index';
import NotesForm from './Notes/edit';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Notes/>}/>
          <Route path='/add' element={<NotesForm/>}/>
          <Route path='/edit/:id' element={<NotesForm/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;