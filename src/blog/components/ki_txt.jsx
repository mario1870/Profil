import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row } from 'react-bootstrap';
import Erst from './blog_comps';


export default function Kii_txt() {
  return (
    <>
        <div style={{marginTop: "-50px"}}>
        
        <div style={{height: 'calc(100vh)'}} className='d-flex pt-5 '>

            <Container style={{marginTop: "00px", zIndex: "3"}} >
            <Row >
                <Erst col="4" ueberschrift= "Anwendungsgebiete von KI" text1="KI kann in fast allen Bereichen eingesetzt werden." img_src="https://cfcdn.aerzteblatt.de/bilder/2020/04/img243349072.jpg" link="/blog/informationsgewinnung" />
                <Erst col="8" ueberschrift= "Computer Vision" text1="Computer Vision ist der Teilbereich der KI, welcher sich damit beschäftigt, Maschinen es zu ermöglichen Bilder zu analysieren" img_src="https://www.aisoma.de/wp-content/uploads/2019/06/Mask-R-CNN-object-categroies.jpg" link="/blog/informationsgewinnung" />

            </Row>


            <Row>
                <Erst col="4" ueberschrift= "Das Perzeptron" text1="KI kann in fast allen Bereichen eingesetzt werden." img_src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Perceptron-or-task.svg/440px-Perceptron-or-task.svg.png" link="/blog/informationsgewinnung" />
                <Erst col="4" ueberschrift= "Der Backpropagation Algorithmus" text1="KI kann in fast allen Bereichen eingesetzt werden." img_src="https://i.ytimg.com/vi/Ilg3gGewQ5U/maxresdefault.jpg" link="/blog/informationsgewinnung" />
                <Erst col="4" ueberschrift= "Anwendungsgebiete von KI" text1="KI kann in fast allen Bereichen eingesetzt werden." img_src="https://keras.io/img/logo-k-keras-wb.png" link="/blog/informationsgewinnung" />
            </Row>


            <Row>
                <Erst col="8" ueberschrift= "Computer Vision" text1="Computer Vision ist der Teilbereich der KI, welcher sich damit beschäftigt, Maschinen es zu ermöglichen Bilder zu analysieren" img_src="https://www.aisoma.de/wp-content/uploads/2019/06/Mask-R-CNN-object-categroies.jpg" link="/blog/informationsgewinnung" />
                <Erst col="4" ueberschrift= "Anwendungsgebiete von KI" text1="KI kann in fast allen Bereichen eingesetzt werden." img_src="https://cfcdn.aerzteblatt.de/bilder/2020/04/img243349072.jpg" link="/blog/informationsgewinnung" />
            </Row>

            </Container>
        </div>
        </div>
    </>
  )
}
