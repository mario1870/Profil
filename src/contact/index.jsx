import React from 'react';
import Form from 'react-bootstrap/Form';
import Footer from '../general_components/footer';
import Navbarr from '../general_components/navbar';
import "./contact.css"

const Contact = () => {
  return (
    <div id="rahmen">
        <Navbarr />
        <div id='contact_field'>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            </Form>
        </div>
    </div>

  );
};

export default Contact;
