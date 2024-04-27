import React from "react";
import NavBar from "../components/navBar";
import { Container } from "react-bootstrap";
import CarouHeader from "../components/carouHeader";
import CarouConcert from "../components/carouConcert";
import CarouTrending from "../components/carouTrending";

const landingPage = () => {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "#e0fbfc",
        }}
      >
        <NavBar />
        <CarouHeader />
        <CarouConcert />
        <CarouTrending />
        <br />
        <br />
      </Container>
    </>
  );
};

export default landingPage;
