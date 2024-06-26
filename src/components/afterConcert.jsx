import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Logo1 from "../assets/f-uphonia.jpeg";
import { Card, Container, Row, Col } from "react-bootstrap";

const afterConcert = () => {
  const responsive = {
    desktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1400 },
      items: 3,
    },
    laptop: {
      breakpoint: { max: 1400, min: 990 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 990, min: 464 },
      items: 1,
    },
  };
  return (
    <Container className="mt-5">
      <h1 style={{ fontWeight: 750, color: "#000" }}>After Concert's</h1>
      <Carousel infinite={true} showDots={true} responsive={responsive}>
        <Card
          style={{ height: "15rem", width: "26rem", borderRadius: "30px" }}
          className="bg-dark text-white"
        >
          <Card.Img
            style={{
              height: "15rem",
              objectFit: "cover",
              borderRadius: "30px",
            }}
            src={Logo1}
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card
          style={{ height: "15rem", width: "26rem", borderRadius: "30px" }}
          className="bg-dark text-white"
        >
          <Card.Img
            style={{
              height: "15rem",
              objectFit: "cover",
              borderRadius: "30px",
            }}
            src={Logo1}
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card
          style={{ height: "15rem", width: "26rem", borderRadius: "30px" }}
          className="bg-dark text-white"
        >
          <Card.Img
            style={{
              height: "15rem",
              objectFit: "cover",
              borderRadius: "30px",
            }}
            src={Logo1}
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Carousel>
    </Container>
  );
};

export default afterConcert;
