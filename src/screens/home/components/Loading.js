import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
return(
    <Row className="justify-content-center">
      <Col><h2>Loading...</h2></Col>
      <Col><Spinner animation="border" role="status"/></Col>
    </Row>
)
};

export {Loading};
export default Loading
