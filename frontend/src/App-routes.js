import React from "react"
import { Routes, Route } from "react-router-dom"
import About from "./pages/About"
import AddClient from "./pages/AddClient"
import Client from "./pages/Client"
import EditClient from "./pages/EditClient"
import Home from "./pages/Home"
import NoMatch from "./pages/NoMatch"
import ViewClients from "./pages/ViewClients"

function APPRoutes() {
  return (
    <>
      <Routes>
        <Route path="" index element={<Home />} />
        <Route path="home" index element={<Home />} />
        <Route path="client" element={<Client />}>
          <Route index element={<AddClient />} />
          <Route path="edit/:id" element={<EditClient />} />
          <Route path="view" element={<ViewClients />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  )
}

export default APPRoutes