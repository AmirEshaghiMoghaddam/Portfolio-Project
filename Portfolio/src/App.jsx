import React from "react";
// router
import { BrowserRouter, Route, Routes } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Home from "./Components/Home";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";

const App = () => {
  return (
    <div>
      <div>
        <Toaster />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
