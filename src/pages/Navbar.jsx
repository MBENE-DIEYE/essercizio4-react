import { Link, useNavigate } from "react-router-dom"
const Navbar = ({about , setAbout}) =>{

    return(
        <>
         <nav>
        <div>
          <Link to="/">Home</Link>
         
        </div>
        <div>
           <Link to="/about" >About</Link>
        </div>
       
      </nav>
        </>
    )
}
export default Navbar