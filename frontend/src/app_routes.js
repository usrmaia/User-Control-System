import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import EditClient from "./pages/EditClient"
import AddClient from "./pages/AddClient"

function APPRoutes() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/add" element={<AddClient />}></Route>
          <Route path="/edit" element={<EditClient />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default APPRoutes