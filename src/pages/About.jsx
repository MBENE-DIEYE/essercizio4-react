import { useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
   const [about, setAbout] = useState()
   const navigate = useNavigate();
   const handleLogin = () => {
      setAbout(true)
      navigate("/")
   }
   return (
      <>
         <p>contenuto dell' app</p>
         <div>
            <button onClick={handleLogin}>login</button>
         </div>
      </>
   )
}

export default About