import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Header/Sidebar';
import EmailList from './components/Header/EmailList';
import { Mail } from './components/Header/Mail';

function App() {
  return (
    <Router>
      <div className="App bg-[#F6F8FC] h-[100vh] overflow-x-hidden overflow-y-hidden">
        <Header />
        <div className='app_body flex flex-row'>
          <Sidebar />
          <Routes>
            <Route path="/" element={<EmailList />} />
            <Route path="/mail" element={<Mail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
