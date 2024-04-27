import React from "react";
import "react-multi-carousel/lib/styles.css";
import Logo1 from "../assets/f-uphonia.jpeg";
import { Card, Container, Row, Col } from "react-bootstrap";

const article = () => {
  return (
    <Container className="mt-5">
      <h1 style={{ fontWeight: 750, color: "#000" }}>Article's</h1>
      <Row className="mt-4">
        <Col>
          <Row>
            <Col className="d-flex gap-4">
              <Card style={{ width: "35rem" }} className="bg-dark text-white">
                <Card.Img src={Logo1} alt="Card image" />
              </Card>
              <div>
                <h2>Judul Artikel</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur minima corrupti magnam delectus illum, magni aspernatur
                dolor assumenda ab at culpa eveniet, laborum explicabo? Minima
                facere tempora quo aspernatur cumque.
              </div>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col className="d-flex gap-4">
              <Card style={{ width: "35rem" }} className="bg-dark text-white">
                <Card.Img src={Logo1} alt="Card image" />
              </Card>
              <div>
                <h2>Judul Artikel</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur minima corrupti magnam delectus illum, magni aspernatur
                dolor assumenda ab at culpa eveniet, laborum explicabo? Minima
                facere tempora quo aspernatur cumque.
              </div>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col className="d-flex gap-4">
              <Card style={{ width: "35rem" }} className="bg-dark text-white">
                <Card.Img src={Logo1} alt="Card image" />
              </Card>
              <div>
                <h2>Judul Artikel</h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur minima corrupti magnam delectus illum, magni aspernatur
                dolor assumenda ab at culpa eveniet, laborum explicabo? Minima
                facere tempora quo aspernatur cumque.
              </div>
            </Col>
          </Row>
        </Col>

        <Col>
          <Row>
            <Card>
              <Card.Header>Quote</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.{" "}
                  </p>
                  <footer className="blockquote-footer">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Row>

          <Row className="mt-2">
            <Card>
              <Card.Header>Quote</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.{" "}
                  </p>
                  <footer className="blockquote-footer">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Row>

          <Row className="mt-2">
            <Card>
              <Card.Header>Quote</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.{" "}
                  </p>
                  <footer className="blockquote-footer">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default article;
