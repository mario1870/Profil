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

        const school = document.getElementById("schule_comp")
        const ausbildung = document.getElementById("ausbildung_comp")
        
        
        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                school.style.animation = "schule 3s 1 forwards"
                ausbildung.style.animation = "schule 3s 1 forwards"
            }
            else{
                school.style.animation = "schule_reverse 3s 1 forwards"
                ausbildung.style.animation = "schule_reverse 3s 1 forwards"
            }
            });
        });

        observer.observe(school);
        observer.observe(ausbildung);
        
        


        school.addEventListener("animationend", function(){
            school.style.left = "300px";
        });
        



   

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
                    <div id="ausbildung_comp">
                        <Ausbildung text="Ausbildung" />
                    </div>
                    
                </div>

                <div  id="schule">
                    <div id="schule_comp">
                        <Schule text="Schule" />
                    </div>
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