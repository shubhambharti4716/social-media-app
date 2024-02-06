import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Item from './Components/Item';
import Notification from './Components/Notification';
import Bookmark from './Components/Bookmark';
import PersonDetails from './Components/PersonDetails';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/person-details" element={<PersonDetails />} />
      </Routes>
    </div>
  );
};

export default App;
