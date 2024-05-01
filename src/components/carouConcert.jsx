import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Logo1 from "../assets/f-uphonia.jpeg";
import { Card, Button, Container, Row } from "react-bootstrap";

const carouConcert = () => {
  const responsive = {
    desktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 1400 },
      items: 4,
      slidesToSlide: 2,
    },
    laptop: {
      breakpoint: { max: 1400, min: 992 },
      items: 3,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 766, min: 464 },
      items: 1,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 2,
    },
  };
  return (
    <Container style={{ width: "90vw", marginTop: "50px" }}>
      <h1 style={{ fontWeight: 750, color: "#000" }}>Upcoming's</h1>
      <Row className="mt-4">
        <Carousel
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
          showDots={true}
          responsive={responsive}
        >
          <Card
            style={{ width: "18rem", borderRadius: "30px" }}
            className="me-4"
          >
            <Card.Img
              style={{ width: "18rem", borderRadius: "30px" }}
              variant="top"
              src={Logo1}
            />
            <Card.Body>
              <Card.Title>Judul Konser</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="warning">order now</Button>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "18rem", borderRadius: "30px" }}
            className="me-4"
          >
            <Card.Img
              style={{ width: "18rem", borderRadius: "30px" }}
              variant="top"
              src={Logo1}
            />
            <Card.Body>
              <Card.Title>Judul Konser</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="warning">order now</Button>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "18rem", borderRadius: "30px" }}
            className="me-4"
          >
            <Card.Img
              style={{ width: "18rem", borderRadius: "30px" }}
              variant="top"
              src={Logo1}
            />
            <Card.Body>
              <Card.Title>Judul Konser</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="warning">order now</Button>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "18rem", borderRadius: "30px" }}
            className="me-4"
          >
            <Card.Img
              style={{ width: "18rem", borderRadius: "30px" }}
              variant="top"
              src={Logo1}
            />
            <Card.Body>
              <Card.Title>Judul Konser</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="warning">order now</Button>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "18rem", borderRadius: "30px" }}
            className="me-4"
          >
            <Card.Img
              style={{ width: "18rem", borderRadius: "30px" }}
              variant="top"
              src={Logo1}
            />
            <Card.Body>
              <Card.Title>Judul Konser</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="warning">order now</Button>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "18rem", borderRadius: "30px" }}
            className="me-4"
          >
            <Card.Img
              style={{ width: "18rem", borderRadius: "30px" }}
              variant="top"
              src={Logo1}
            />
            <Card.Body>
              <Card.Title>Judul Konser</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="warning">order now</Button>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "18rem", borderRadius: "30px" }}
            className="me-4"
          >
            <Card.Img
              style={{ width: "18rem", borderRadius: "30px" }}
              variant="top"
              src={Logo1}
            />
            <Card.Body>
              <Card.Title>Judul Konser</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="warning">order now</Button>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "18rem", borderRadius: "30px" }}
            className="me-4"
          >
            <Card.Img
              style={{ width: "18rem", borderRadius: "30px" }}
              variant="top"
              src={Logo1}
            />
            <Card.Body>
              <Card.Title>Judul Konser</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="warning">order now</Button>
            </Card.Body>
          </Card>
        </Carousel>
      </Row>
    </Container>
  );
};

export default carouConcert;
