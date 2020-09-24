import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

const Forms = () => (
  <div className="form-container">
    <Form className="form">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control className="email" type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comment Here</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <Button variant="info" type="submit">
        Submit!
      </Button>
    </Form>
  </div>
);

export default Forms;
