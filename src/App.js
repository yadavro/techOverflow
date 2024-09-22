import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from './components/Nav';
import Questions from './components/Questions';
import Home from './components/Home';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";
import QuestionDetail from "./components/QuestionDetail";
import TagDetail from "./components/TagDetail";
import AskQuestion from "./components/AskQuestion";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <div className="app-container">
          <SideNav />
          <div className="main-layout">
            <div className="content">
              <Routes>
                <Route path="/questions" element={<Questions />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Register />} />
                <Route path="/questions/:id" element={<QuestionDetail/>}/>
                <Route path="/tag/:detail" element={<TagDetail/>}/>
                <Route path="/askQuestion" element={<AskQuestion/>}/>
              </Routes>
            </div>
          </div>
        <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
