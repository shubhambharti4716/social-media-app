import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Item from './Components/Item';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/item/:1" element={<Item/>} />
      </Routes>
    </div>
  );
};

export default App;
