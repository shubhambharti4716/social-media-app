import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Item from './Components/Item';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/detail/:id" element={<Item/>} />
      </Routes>
    </div>
  );
};

export default App;
