import "./schule.css"



const Schule = (props) => {
    return (
        <div>
            <img src="icon_schule.png" id="icon"  />
            <p>{props.text}</p>
        </div>
    )
}

export default Schule