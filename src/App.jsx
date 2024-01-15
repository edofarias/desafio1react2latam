// App.jsx
import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import './App.css'; // Make sure this line is importing your CSS file
import {Route, Routes} from "react-router-dom";
import Home from './views/Home.jsx';
import Contact from './views/Contact.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>      
      </Routes>
    </>
  );
}

export default App;

