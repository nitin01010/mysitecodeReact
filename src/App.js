import React from "react";
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import Signin from './components/Register';
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="Container">
        <Nav />
        <hr />
        <div className="Main">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
          </Routes>
        </div>
        <br /><br />
        <hr></hr>
        <Footer />
      </div>
    </>
  );
}

export default App;
