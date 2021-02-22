import React from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";

function BackButton({ text, route }) {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <Button type="button" onClick={handleClick}>
      {text}
    </Button>
  );
}
export default BackButton;
