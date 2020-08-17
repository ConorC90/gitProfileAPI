import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProfiles, getError } from "../actions";
import debounce from "lodash/debounce";

const Search = ({ getProfiles, query }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  const debouncedGetProfiles = debounce((query) => {
    getProfiles(query);
  }, 700);
  const thereIsAnError = (error) => {
    console.log("nope again");
    getError(error);
  };

  const commitSearch = (e) => {
    const searchTerm = document.getElementById("formBasicEmail").value;
    if (searchTerm.length < 4) {
      thereIsAnError("Your search term must be at least 4 characters long");
    } else if (searchTerm === "gcpglobal") {
      thereIsAnError(
        "It is forbidden to search for gcpglobal. Please search for a different profile"
      );
    } else {
      debouncedGetProfiles(searchTerm);
    }
  };

  return (
    <div className="search-profiles">
      <Form className="search-profiles--form" onSubmit={handleOnSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            required
            placeholder="Search for github profiles..."
          />
        </Form.Group>
        <Button variant="primary" onClick={commitSearch} type="submit">
          Search
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    query: state.profiles.query,
    errorMessage: false,
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
