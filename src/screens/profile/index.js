import React, { useState, useEffect } from "react";
import axios from "axios";
import isEmpty from "lodash/isEmpty";
import Image from "react-bootstrap/Image";
import Media from "react-bootstrap/Media";
import ListGroup from "react-bootstrap/ListGroup";
import "./profile.css";

const Profile = ({ match: { params } }) => {
  const [proflieInfo, setBookInfo] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    setIsFetching(true);
    axios
      .get(`https://api.github.com/users/${params.ID}`)
      .then((response) => {
        setBookInfo(response.data);
      })
      .catch(() => {
        setBookInfo({});
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [params.ID]);

  let jsxStr = "";
  if (isFetching) {
    jsxStr = <p>Loading...</p>;
  }

  if (!isEmpty(proflieInfo)) {
    jsxStr = (
      <div className="profile-card">
        <Media>
          <Media.Body>
            <h1>{proflieInfo.login}</h1>
            <h3>{proflieInfo.location}</h3>

            <ListGroup>
              <ListGroup.Item>
                Public Repos: {proflieInfo.public_repos}
              </ListGroup.Item>
              <ListGroup.Item>
                Followers: {proflieInfo.followers}{" "}
              </ListGroup.Item>
              <ListGroup.Item>
                Following: {proflieInfo.following}{" "}
              </ListGroup.Item>
              <ListGroup.Item>
                Account created on: {proflieInfo.created_at.slice(0, 10)}
              </ListGroup.Item>
            </ListGroup>
          </Media.Body>
          <Image
            width={225}
            height={225}
            rounded
            className="ml-3"
            src={proflieInfo.avatar_url}
            alt="Git hub profile picture"
          />
        </Media>
      </div>
    );
  }

  return (
    <div id="profile" className="page">
      <div className="container">{jsxStr}</div>
    </div>
  );
};
export default Profile;
