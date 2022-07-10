import React from 'react';
import './App.css';
import {BrowserRouter as Router ,Routes,Route}  from 'react-router-dom'
import Dashboard from './components/pages/Dashboard';
import Curse from './components/pages/Curse';
import Exam from './components/pages/Exam';
import Student from './components/pages/Student';
import Result from './components/pages/Result';
import Live from './components/pages/Live';
import Notice from './components/pages/Notice';
import Notification from './components/pages/Notification';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Router>
      <Sidebar>
        <Routes>
        <Route path="/" element={<Dashboard />} />
      <Route path="/cursess" element={<Curse />} />
      <Route path="/exam" element={<Exam />} />
      <Route path="/student" element={<Student />} />
      <Route path="/result" element={<Result/>} />
      <Route path="/live" element={<Live />} />
      <Route path="/notice" element={<Notice />} />
      <Route path="/notification" element={<Notification />} />
        </Routes>
        </Sidebar>
      </Router>
    </>
  );
}

export default App;
