import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProfiles } from "../actions";
import { Loading } from "../components/Loading"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Search = ({ getProfiles, isFetching}) => {

  const handleOnSubmit = (e) => {
    e.preventDefault();
    commitSearch()
  };

const [searchTerm , setSearchTerm] = useState('');

  const commitSearch = () => {
    getProfiles(searchTerm);
  };

  let jsxStr = "";
  if(isFetching){
    jsxStr = (
        <Loading></Loading>
    )
  }
if(!isFetching){
  jsxStr =  (
      <Container>
        <Row>
          <Col xs={12} md={10}>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                  type="text"
                  required
                  placeholder="Search for github profiles..."
                  onChange={e => setSearchTerm(e.target.value)}
              />
            </Form.Group>
          </Form>
          </Col>
          <Col xs={12} md={2}>
            <Button variant="primary" onClick={commitSearch} type="submit" disabled={!searchTerm}>
              Search
            </Button>
          </Col>
        </Row>
      </Container>
  )
}
  return (
      jsxStr
  );
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    query: state.profiles.query,
    errorMessage: false,
    isFetching: state.profiles.isFetching
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
