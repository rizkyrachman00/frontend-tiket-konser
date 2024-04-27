import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Logo1 from "../assets/f-uphonia.jpeg";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const carouTrending = () => {
  const responsive = {
    desktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    laptop: {
      breakpoint: { max: 1024, min: 800 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Container className="mt-5">
      <h1 style={{ fontWeight: 750, color: "#000" }}>Trending's</h1>
      <Row className="mt-4">
        <Carousel infinite={true} showDots={true} responsive={responsive}>
          <Container>
            <Row>
              <Col lg={4}>
                <Card className="bg-dark text-white">
                  <Card.Img src={Logo1} alt="Card image" />
                </Card>
              </Col>
              <Col lg={7}>
                <h1>Judul Konser</h1>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
                eaque harum odio sequi, iure consectetur minima dicta saepe
                tempora fugit sint veniam provident ad ex reprehenderit
                recusandae non. Dolorem, nostrum. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Sequi vel minima hic nihil maxime
                est earum, facilis debitis doloribus, accusantium praesentium
                asperiores ipsa at ducimus. Omnis accusamus consequatur officia
                porro.
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col lg={4}>
                <Card className="bg-dark text-white">
                  <Card.Img src={Logo1} alt="Card image" />
                </Card>
              </Col>
              <Col lg={7}>
                <h1>Judul Konser</h1>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
                eaque harum odio sequi, iure consectetur minima dicta saepe
                tempora fugit sint veniam provident ad ex reprehenderit
                recusandae non. Dolorem, nostrum. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Sequi vel minima hic nihil maxime
                est earum, facilis debitis doloribus, accusantium praesentium
                asperiores ipsa at ducimus. Omnis accusamus consequatur officia
                porro.
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col lg={4}>
                <Card className="bg-dark text-white">
                  <Card.Img src={Logo1} alt="Card image" />
                </Card>
              </Col>
              <Col lg={7}>
                <h1>Judul Konser</h1>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
                eaque harum odio sequi, iure consectetur minima dicta saepe
                tempora fugit sint veniam provident ad ex reprehenderit
                recusandae non. Dolorem, nostrum. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Sequi vel minima hic nihil maxime
                est earum, facilis debitis doloribus, accusantium praesentium
                asperiores ipsa at ducimus. Omnis accusamus consequatur officia
                porro.
              </Col>
            </Row>
          </Container>
        </Carousel>
      </Row>
    </Container>
  );
};

export default carouTrending;
