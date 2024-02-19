
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterListPage from '././pages/CharacterListPage';
import CharacterDetailsPage from '././pages/CharacterDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharacterListPage />} />
        <Route path="/character/:id" element={<CharacterDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
