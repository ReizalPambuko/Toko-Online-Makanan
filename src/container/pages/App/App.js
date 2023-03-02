import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Sukses from "../Sukses/Sukses";


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route>
              <Route path="/" element={<Home />} />
              <Route path="/sukses" element={<Sukses />} />  
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
