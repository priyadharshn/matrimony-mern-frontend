
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./Profiles/Profile";
import Groom from "./Profiles/Groom";
import Bride from "./Profiles/Bride";
import Welcome from "./pages/Welcome";
import Update from "./Profiles/Update";
import "./App.css";
import Message from "./Profiles/Message";
import Msg from "./Profiles/Msg";
import GroomUsers from "./Profiles/GroomUser";
import BrideUsers from "./Profiles/BrideUsers";
import UpdateMale from "./Profiles/UpdateMale";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/groom" element={<Groom />} />
          <Route path="/bride" element={<Bride />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/updateMale/:id" element={<UpdateMale/>} />
          <Route path="/message" element={<Message />} />
          <Route path="/msg" element={<Msg />} />
          <Route path="/viewgroom/:id" element={<GroomUsers />} />
          <Route path="/viewbride/:id" element={<BrideUsers />} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;




























