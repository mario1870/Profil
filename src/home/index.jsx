import Footer from "../general_components/footer"
import Navbarr from "../general_components/navbar"
import Face_image from "./face_image"
import Welcome_text from "./willkommenstext"




const Home = () => {
    return(
        <>
            <Navbarr />
            <p>LEL</p>
            <Face_image />
            <Welcome_text text="Willkommen LELoo" />
            <Footer />
        </>
    )
}

export default Home