import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Carousel from 'react-bootstrap/Carousel';
import "./themen.css"



export default function Bg_carusel() {
  return (
    <>

      <div style={{height: 'calc(100vh)'}} className='d-flex justify-content-center align-items-center'>
          <Carousel fade interval={"5000"} className='w-100' indicators={false} controls={false}>
          <Carousel.Item className='w-100'>
            <div style={{height: 'calc(100vh)', width: "100%", backgroundImage:"url(https://a-static.besthdwallpaper.com/landscape-digital-art-wallpaper-2560x2048-80890_33.jpg)", backgroundSize:"cover"}}  className='d-flex justify-content-center align-items-center bg-danger'><span className="text pb-5">blog</span></div>
          </Carousel.Item>

          <Carousel.Item>
            <div style={{height: 'calc(100vh)', width: "100%", backgroundImage:"url(https://i.pinimg.com/originals/30/6f/eb/306febf54e65d0bf77056bfc9dc1cd40.jpg)", backgroundSize:"cover"}} className='d-flex justify-content-center align-items-center'><span className="text pb-5">blog</span></div>
          </Carousel.Item>

          <Carousel.Item>
            <div style={{height: 'calc(100vh)', marginTop: "0px", width: "100%", backgroundImage:"url(https://www.tubewp.com/wp-content/uploads/2022/11/messi-and-ronaldo-chess-wallpapers.jpg)", backgroundSize:"cover"}} className="d-flex justify-content-center align-items-center"><span className="text pb-5">blog</span></div>
          </Carousel.Item>
          </Carousel>
          
      </div>
      <div style={{height: "5000px", backgroundSize: "cover", backgroundImage: "URL(https://1.bp.blogspot.com/-zH8Ku1F8-Hk/X3SZmk-Wu6I/AAAAAAAAbeM/xlbX19q0xUc8UoBlJ4y540ZmxeOF99rzgCLcBGAsYHQ/w1600/v2-simple-view-phone-wallpaper-hd.png)"}}>

      </div>


    </>
  )
}
