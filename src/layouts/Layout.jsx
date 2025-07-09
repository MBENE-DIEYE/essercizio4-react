import Navbar from "../pages/navbar"
import Footer from "../pages/Footer"
import { Outlet } from "react-router-dom"

const Layout = ({about, 
    setAbout}) =>{
    return(
        <>
        <Navbar />
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout