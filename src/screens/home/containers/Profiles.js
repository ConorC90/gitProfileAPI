import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
import ProfilesCard from "../components/ProfilesCard";
import Errors from "../components/Errors";
import "../home.css";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


const renderProfilesList = (data, query) => {
  if (isEmpty(data)) {
    return null;
  }
  let { items: profiles } = data;
  return (
    <Container>
      <h3>Search results for: {query}</h3>
      <Row className="profiles-list">
        {profiles.map((profile) => (
          <ProfilesCard key={profile.id} profile={profile}/>
        ))}
      </Row>
    </Container>
  );
};

const Profiles = ({ data, isFetching, query, error }) => {
  let jsxStr = "";
  if (isFetching) {
    jsxStr = (
      <div>
        Loading...
        <Spinner animation="grow" />
      </div>
    );
  }
  if (error) {
    jsxStr = <Errors />;
  } else {
    jsxStr = renderProfilesList(data, query);
  }
  return <div className="profiles">{jsxStr}</div>;
};

const mapStateToProps = (state) => {
  let { data, isFetching, query } = state.profiles;
  return {
    data,
    isFetching,
    query,
  };
};

export default connect(mapStateToProps, null)(Profiles);
