import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProfiles } from "../../actions";
import { Loading } from "../../components/Loading";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Search = ({ getProfiles, isFetching }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    commitSearch();
  };

  const [searchTerm, setSearchTerm] = useState("");

  const commitSearch = () => {
    getProfiles(searchTerm);
  };

  const jsxStr = (
    <Row>
      <Col xs={12} md={10}>
        <Form onSubmit={handleOnSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              required
              value={searchTerm}
              placeholder="Search for github profiles..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Col>
      <Col xs={12} md={2}>
        <Button
          variant="primary"
          onClick={commitSearch}
          type="submit"
          disabled={!searchTerm}
        >
          Search
        </Button>
      </Col>
    </Row>
  );

  return isFetching ? <Loading /> : jsxStr;
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.profiles.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getProfiles,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
