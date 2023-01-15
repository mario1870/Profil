import Hardskills from "./hardskills/hardskillls"
import Softskills from "./softskills/softskills"
import "./skills.css"


const Skills = () => {
    return(
        <div id="skills">
            <div id="softskills">
                <Softskills />
            </div>
            <div id="hardskills">
                <Hardskills />
            </div>
            
        </div>
    )
}

export default Skills