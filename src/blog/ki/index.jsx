import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Bg_carusel from '../components/bg_carusel';
import Themen from '../components/themen';
import Kii_txt from '../components/ki_txt';
import Navbarr from '../../general_components/navbar';



export default function Ki() {

  return (
    <>
        <Navbarr />
        <div style={{position: "absolute", zIndex: "100", height: '6', top: "0px", width: "100%", zIndex: "-2"}}>
            <Bg_carusel />
        </div>

        <div style={{height: "10000px", width: "100%", display: "flex", justifyContent: "center", marginTop: "calc(100vh / 1.5)", zIndex: "10"}}>
            <div className='z-index-3 position-absolute w-80' style={{height: "100%"}}>
                <Themen />
                <Kii_txt />
            </div>
        </div>
    </>
  )
}
