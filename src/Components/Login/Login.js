import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
const Login = () => {
  return (
    <div>
      <section className="container=fluid">
        <section className="row justify-content-center">
          <section className="col-12 col-sm-6 col-md-3">
            <Form className="form-container">
              <Form.Group className="" controlId="">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="name" placeholder="Enter Your Name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" className="form-control" type="submit">Log In</Button>
              <Button variant="secondary" className="form-control mt-2" type="submit">Log In With Google</Button>
              <Button variant="success" className="form-control mt-2" type="submit">Log In With Facebook</Button>
            </Form>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Login;
