import Footer from "../general_components/footer"
import Navbarr from "../general_components/navbar"
import Face_image from "./face_image"
import Welcome_text from "./willkommenstext"
import "./index.css"
import Ausbildung from "./lebenslauf/ausbildung"
import Interessen from "./lebenslauf/interessen"
import Schule from "./lebenslauf/schule"
import Ueber_mich from "./lebenslauf/ueber_mich"
import Skills from "./skills"
import { useState, useEffect } from "react"



const Home = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      function handleScroll() {
        setScrollPosition(window.pageYOffset);
        console.log(`Current scroll position: ${scrollPosition}`);
      }
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
    return(
        <>

        <Navbarr />
        <div id="page">
            <div id="landing">
                <div id="image" >
                    <Face_image  />
                </div>
                <div id="text" >
                    <Welcome_text  />
                </div>
            </div>



            <div id="cv">

                <div id="ausbildung">
                    <Ausbildung text="Ausbildung" />
                </div>

                <div  id="schule">
                    <Schule text="Schule" />
                </div>

                <div id="ueber_mich">
                    <Ueber_mich text="Über mich" />
                </div>
                
                <div id="interessen">
                    <Interessen text="Meine Interessen" />
                </div>
            </div>
            
            <div id="skills">
                <Skills />
            </div>
            
            <Footer />
        </div>
        </>
    )
}

export default Home