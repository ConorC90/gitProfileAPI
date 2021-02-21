import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const ProfilesCard = ({ profile }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} >
      <Link to={`/profile/${profile.login}`}>
        <Card>
          <Card.Img variant="top" src={profile.avatar_url} />
          <Card.Body>
            <Card.Title>Login: {profile.login}</Card.Title>
            <Card.Subtitle>ID: {profile.id}</Card.Subtitle>
            <Card.Text className="profile--description">{}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default ProfilesCard;
