import React from "react";
import {
  Container,
  Navbar,
  Dropdown,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import Logo from "../assets/react.svg";
import { useNavigate } from "react-router-dom";

const navBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container style={{ padding: "0px" }} fluid>
        <Row>
          <Navbar
            style={{
              backgroundImage: "linear-gradient(to right, #001d3d, #98c1d9)",
              height: "11vh",
            }}
            className="gap-5 justify-content-center align-items-center"
          >
            <Navbar>
              <Navbar.Brand
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/")}
              >
                <img src={Logo} alt="React Bootstrap logo" />
              </Navbar.Brand>

              <Navbar.Brand
                style={{
                  fontWeight: 600,
                  fontSize: "35px",
                  cursor: "pointer",
                  color: "#ffc300",
                }}
                onClick={() => navigate("/")}
              >
                I-Vent
              </Navbar.Brand>
            </Navbar>

            <Navbar className="gap-5">
              <Form className="d-flex">
                <Dropdown>
                  <Dropdown.Toggle
                    style={{ backgroundColor: "#532b88" }}
                    id="dropdown-basic"
                  >
                    Genres
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                  type="search"
                  placeholder="Cari konser, Judul musik, Artist"
                  className="me-2"
                  aria-label="Search"
                  style={{ width: "50vw" }}
                />
                <Button variant="warning">Search</Button>
              </Form>

              <Navbar.Brand
                style={{ fontWeight: 700, cursor: "pointer" }}
                onClick={() => navigate("/login")}
              >
                Masuk
              </Navbar.Brand>
            </Navbar>
          </Navbar>
        </Row>
      </Container>
    </>
  );
};

export default navBar;
