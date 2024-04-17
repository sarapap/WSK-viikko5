import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import Upload from './components/Upload';

const App = () => {
  return (
    <Router>
      <h1>My App</h1>

      <nav>
        <Link to='/profile'>Profiili 🤣</Link>
        <Link to='/'>Etusivu 🏠</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/upload' element={<Upload />} />
      </Routes>
    </Router>
  );
};

export default App; 
