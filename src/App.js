import './App.css';
import React from 'react';
import Home from './Pages/Home';
import Welcome from './Pages/Welcome';
import Register from './Pages/Register';
import Login from './Pages/Login';
import FormFunction from './Pages/FormFunction';
import LoginFunction from './Pages/LoginFunction';
import Expense from './Pages/Expense';
import NotFound from './Pages/NotFound';

//Code commented
import {BrowserRouter as Router,Route, Routes, Link, Navigate} from 'react-router-dom';
import SuccessfulRegister from './Pages/SuccessfulRegister';

function App() {
  return (
    <Router>
      <div className="App">
     
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/welcome" element={ <Welcome/> }/>
          <Route path="/register" element={ <Register/> } />
          <Route path="/login" element={<Login/>}/>
          <Route path="/sregister" element={<SuccessfulRegister/>}/>
          <Route path="/sregister/login" element={<Login/>}/>
          <Route path="/expense" element={<Expense/>}/>
          <Route path="/register/expense" element={<Expense/>}/>
          <Route path="/login/expense" element={<Expense/>}/>
          <Route path="/register/login" element={<Login/>}/>
          <Route path="/register/login/expense" element={<Expense/>}/>
          <Route path="*" element={<NotFound/>}/>
         
        </Routes>
      </div>
    </Router>

  );
}

export default App;
