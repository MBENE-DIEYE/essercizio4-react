import Navbar from "../navbar"
import Footer from "../Footer"
import { Outlet } from "react-router-dom"

const Layout = () =>{
    return(
        <>
        <Navbar />
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout