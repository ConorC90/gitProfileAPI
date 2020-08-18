import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
import ProfilesCard from "../components/ProfilesCard";
import Errors from "../components/Errors";
import "../home.css";
import BarChart from "../components/BarChart";

const renderProfilesList = (data, query) => {
  if (isEmpty(data)) {
    return null;
  }
  let { items: profiles } = data;
  console.log(data, "lets get some answers");
  return (
    <>
      <h3>Search results for: {query}</h3>
      <div className="profiles-list">
        {profiles.slice(0, 20).map((profile) => (
          <ProfilesCard key={profile.id} profile={profile} />
        ))}
      </div>
      <div>
      <BarChart  data={data.items} />
      </div>
    </>
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
