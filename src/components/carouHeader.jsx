import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import Logo1 from "../assets/76 hepii ngabuburit.jpeg";
import Logo2 from "../assets/bhavana.jpeg";
import Logo3 from "../assets/f-uphonia.jpeg";

const carousel = () => {
  return (
    <Container className="d-flex justify-content-center">
      <Row style={{ marginTop: "7rem" }}>
        <style>
          {`
          .carousel-control-prev-icon,
          .carousel-control-next-icon {
            background-color: rgba(0, 0, 0, 0.5); /* Warna latar belakang tombol slide panah */
            border-radius: 50%; /* Membuat tombol slide panah menjadi bulat */
          }
          
          .carousel-control-prev-icon:hover,
          .carousel-control-next-icon:hover {
            background-color: rgba(0, 0, 0, 0.7); /* Warna latar belakang tombol slide panah saat dihover */
          }
          
          .carousel-caption {
            background-color: rgba(0, 0, 0, 0.5); /* Warna latar belakang caption */
            color: white; /* Warna teks caption */
            border-radius: 20px; /* Membuat caption menjadi bulat */
          }
          `}
        </style>

        <Carousel fade style={{ width: "98vw" }}>
          <Carousel.Item interval={1000}>
            <img
              src={Logo1}
              className="d-block w-100"
              alt="First slide"
              style={{
                objectFit: "cover",
                height: "600px",
                borderRadius: "20px",
              }}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              src={Logo2}
              className="d-block w-100"
              alt="Second slide"
              style={{
                objectFit: "cover",
                height: "600px",
                borderRadius: "20px",
              }}
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={Logo3}
              className="d-block w-100"
              alt="Third slide"
              style={{
                objectFit: "cover",
                height: "600px",
                borderRadius: "20px",
              }}
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
};

export default carousel;
