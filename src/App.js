import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { useState } from "react";
import Nav from './Component/header/Nav';
import Login from './Component/Login/Login';
import Register from "./Component/Register/Register";
import Home from "./Component/Home/Home";
function App() {
  const [isLogin, setIsLogin] = useState(false)
  function handleLogin(){
    setIsLogin(true)
  }
  return (
    <>
      <div id="main-component" className="flex flex-col  ">
        <div>
          {isLogin ? (<Nav></Nav>) : null}
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login handleLogin={handleLogin} />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
