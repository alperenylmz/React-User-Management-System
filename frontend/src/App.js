import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import AddEdit from "./pages/AddEdit";
import About from "./pages/About";
import View from "./pages/View";
import React from "react";
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ToastContainer position="top-center" />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/add" element={<AddEdit/>}/>
          <Route path="/update/:id" element={<AddEdit/>}/>
          <Route path="/view/:id" element={<View/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
