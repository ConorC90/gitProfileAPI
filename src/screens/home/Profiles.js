import React from "react";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
import ProfilesCard from "../../components/ProfilesCard";
import "../../home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Errors from "../../components/Errors";

const renderProfilesList = (data, query) => {
  if (isEmpty(data)) {
    return null;
  }
  let { items: profiles } = data;
  return (
    <Container>
      <h3>Search results for: "{query}"</h3>
      <h4>
        {data.items.length} of {data.total_count}
      </h4>
      <Row className="profiles-list">
        {profiles.map((profile) => (
          <ProfilesCard key={profile.id} profile={profile} />
        ))}
      </Row>
    </Container>
  );
};

const Profiles = ({ data, query }) => {
  if (data.total_count === 0) {
    return (
      <h3>No results for "{query}", please try a different search term</h3>
    );
  }
  let jsxStr = renderProfilesList(data, query);
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
