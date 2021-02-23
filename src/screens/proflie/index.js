import React, { useState, useEffect } from "react";
import Loading from "../../components/Loading";
import isEmpty from "lodash/isEmpty";
import axios from "axios";
import Image from "react-bootstrap/Image";
import Media from "react-bootstrap/Media";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../profile.css";
import BackButton from "../../components/BackButton";

const Index = ({ match: { params } }) => {
  const [profileInfo, setProfileInfo] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    axios
      .get(`https://api.github.com/users/${params.ID}`)
      .then((response) => {
        setProfileInfo(response.data);
      })
      .catch(() => {
        setProfileInfo({});
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [params.ID]);

  let jsxStr = "";
  if (!isEmpty(profileInfo)) {
    jsxStr = (
      <Row xs={1} md={2}>
        <Col>
          <Media className="width-auto m-3">
            <Media.Body>
              <a href={profileInfo.html_url}>
                <h1>{profileInfo.login}</h1>
              </a>
              <h3>{profileInfo.location}</h3>
              <ListGroup>
                <ListGroup.Item>
                  Public Repos: {profileInfo.public_repos}
                </ListGroup.Item>
                <ListGroup.Item>
                  Followers: {profileInfo.followers}
                </ListGroup.Item>
                <ListGroup.Item>
                  Following: {profileInfo.following}
                </ListGroup.Item>
                <ListGroup.Item>
                  Account created on: {profileInfo.created_at.slice(0, 10)}
                </ListGroup.Item>
              </ListGroup>
            </Media.Body>
          </Media>
        </Col>
        <Col className="justify-center align-center flex">
          <Image
            width={225}
            height={225}
            rounded
            className="m-3"
            src={profileInfo.avatar_url}
            alt="Git hub profile picture"
          />
        </Col>
        <Col className="justify-center align-center flex">
          <BackButton text={"Go Back"}></BackButton>
        </Col>
      </Row>
    );
  }

  return (
    <div id="profile" className="page">
      <div className="container">
        {isFetching && <Loading></Loading>}
        {jsxStr}
      </div>
    </div>
  );
};
export default Index;
