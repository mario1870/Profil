import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Bg_carusel from '../components/bg_carusel';
import Themen from '../components/themen';
import Hck_txt from '../components/hck_txt';
import Navbarr from '../../general_components/navbar';


export default function Ethical_hacking() {
  return (
    <div style={{left: "0"}}>
        <Navbarr />
        <div style={{position: "absolute", left:"0", height: '6', top: "0px", width: "100%", zIndex: "-2"}}>
          <Bg_carusel />
        </div>

        <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "calc(100vh / 1.5)", zIndex: "10"}}>
            <div className='z-index-3 position-absolute w-80' style={{height: "100%"}}>
                <Themen />
                <Hck_txt />
            </div>
        </div>
    </ div>
  )
}
