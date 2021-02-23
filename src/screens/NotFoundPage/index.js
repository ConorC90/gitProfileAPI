import React from "react";
import FourZeroFour from "../../media/404-not-found.jpg";
import Container from "react-bootstrap/Container";
import BackButton from "../../components/BackButton";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";

function Index() {
  return (
    <Container>
      <Row>
        <Col className="justify-center align-center flex mt-2">
          <img src={FourZeroFour} alt="404 Page not Found" />
        </Col>
      </Row>
      <Row>
        <Col className="justify-center align-center flex mt-2">
          <BackButton text={"Back to safety"}></BackButton>
        </Col>
      </Row>
    </Container>
  );
}
export default Index;
