import { useState } from "react"
import "./ausbildung.css"



const Ausbildung = (props) => {

    const [a, setA] = useState(0)

    window.addEventListener('scroll', (x) => {
    
        const scrollPos = window.pageYOffset;
        console.log(scrollPos)
        return scrollPos
      });

    return (
        <div>
            <img src="icon_ausbildung.png" id="icon"  />
            <p>{props.text}</p>
        </div>
    )
}

export default Ausbildung