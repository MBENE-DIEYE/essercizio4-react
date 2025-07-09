import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/About"

import Layout from "./layouts/layout"




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
