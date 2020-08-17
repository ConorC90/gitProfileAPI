import React from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";

const Errors = ({ error }) => {
  let jsxStr = error.error;
  if (error) {
    return (
      <Container className="justify-content-md-center">
        <Alert variant="danger">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>{jsxStr}</p>
        </Alert>
      </Container>
    );
  } else {
    return <></>;
  }
};

const mapStateToProps = (state) => {
  return {
    error: state.profiles.error,
  };
};

export default connect(mapStateToProps)(Errors);
