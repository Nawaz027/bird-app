import logo from './logo.svg';
import {withRouter} from 'react-router';
import {useState} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Registration from './Components/Registration';
import Login from './Components/Login';
import HomePage from './Components/HomePage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<HomePage />} >
        </Route>
        <Route path="/login" element={<Login />} >
        </Route>
        <Route path="/register" element={<Registration />} >
        </Route>
        {/* <Route path="/dashboard" element={<Dashboard />} >
        </Route> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
