
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';
import { Col, Card, Button } from 'react-bootstrap';
import { useState } from 'react';





export default function Erst(props){

    const bild_padding_y_sm = 2
    const [shadow, setShadow] = useState("0px 0px 0px 0px blue, 0px 0px 0px 0px blue");
    
    function changeShadow() {
        setShadow("0px 0px 10px #ff0000")
    }

    return (

        <Col md={props.col} className={`my-${bild_padding_y_sm} my-sm-2`} >
            <Card
                style={{ height: "470px", boxShadow: shadow }} onMouseOver={changeShadow} onMouseOut={() => setShadow("0px 0px 0px 0px blue, 0px 0px 0px 0px blue")}>
            <Card.Img variant="top" src={props.img_src} style={{height: "50%", objectFit:"cover"}} />
            <Card.Body>
                <Card.Title>{props.ueberschrift}</Card.Title>
                <Card.Text>{props.text1}</Card.Text>
                <Link to={props.link}><Button to={props.link} variant="primary">Weiter lesen</Button></Link>
            </Card.Body>
            </Card>
        </Col>

        );
}