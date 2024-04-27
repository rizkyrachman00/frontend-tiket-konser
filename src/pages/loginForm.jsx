import React, { useState } from "react";
import LoginFunction from "../components/loginFunction";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const loginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await LoginFunction(email, password);
      onLogin(userData); // Kirim respons ke komponen induk
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <Container style={{ marginTop: "20vh" }}>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Login</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button className="mt-4" variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default loginForm;
