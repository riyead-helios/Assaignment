import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Blog from './components/Blog';
import Details from './components/Details';
import Contact from './components/Contact';
import About from './components/About';;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Details/:employeeId' element={<Details />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </Router>
    
  );
};

export default App;








