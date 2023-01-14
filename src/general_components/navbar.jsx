import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import "./navbar.css"


const Navbarr = () => {

    const [hamburger, setHamburger] = useState(0)

    useEffect(() => {
      console.log(hamburger)
      if (hamburger === 1){
        document.getElementById("handy_menu").style.display = "block"
      }
      else{
        document.getElementById("handy_menu").style.display = "none"
      }
    })
    

    return(
      <Router>
        <nav className='bg-primary' id='nav'>
          <span id='span_img'>
            <Link to="/"><div id='div_img' style={{height: "70px"}}><img src='logo.png' style={{height: "40px"}} /></div></Link>
          </span>

          <span style={{display: "flex", justifyContent: "center", alignItems: "center", paddingRight: "30px"}}>
            <Link id="blog" to="/blog"><div className='div_link'>Blog</div></Link>
            <Link id="projects" to="/projects" ><div className='div_link'>Projekte</div></Link>
            <Link id="contact" to="/contact" ><div className='div_link'>Kontakt</div></Link>
          </span>

          
          <div className="row" id='hamburgerm'>
            <input type="checkbox" id="hamburg" onChange={(e) => {setHamburger(e.target.checked ? 1 : 0)}} />
            <label for="hamburg" className="hamburg">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </label>
        </div>

        <div id='handy_menu'>
          <span style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column"}}>
            <Link id="blog2" to="/blog"><div className='div_link'>Blog</div></Link>
            <Link id="projects2" to="/projects" ><div className='div_link'>Projekte</div></Link>
            <Link id="contact2" to="/contact" ><div className='div_link'>Kontakt</div></Link>
          </span>
        </div>

        </nav>
      </Router>
    )
}

export default Navbarr