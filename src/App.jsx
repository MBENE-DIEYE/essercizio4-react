import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/About"

import Layout from "./layouts/layout"
import Navbar from "./pages/navbar"
import Footer from "./pages/Footer"

const App = () => {


  return (
    <>
     

      <Routes>

        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>



      </Routes>

    </>
  )
}

export default App
