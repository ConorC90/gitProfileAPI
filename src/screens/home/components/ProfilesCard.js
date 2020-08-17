import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const ProfilesCard = ({ profile }) => {
  return (
    <div className="profile">
      <Link className="profile" to={`/profile/${profile.login}`}>
        <Card>
          <Card.Img variant="top" src={profile.avatar_url} />
          <Card.Body>
            <Card.Title>Login {profile.login}</Card.Title>
            <Card.Subtitle>ID: {profile.id}</Card.Subtitle>
            <Card.Text className="profile--description">{}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default ProfilesCard;
