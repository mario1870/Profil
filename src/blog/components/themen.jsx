import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';
import "./themen.css" 


export default function Themen() {
  return (
    <>
    <div className='d-flex justify-content-center'>
      <span className='w-50 text-center' id='p1'>
        <Link className="nav-link py-2" to="/blog/eh" id="t1">Ethical Hacking</Link>
      </span>
      <span className='w-50 text-center' id="p2">
        <Link className="nav-link py-2" to="/blog/ki" id='t2'>Künstliche Intelligenz</Link>
      </span>
    </div>
    </>
  )
}
