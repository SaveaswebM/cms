import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Cards(props) {
  return (
    <>
      <Card style={{ }}>
        <video
          autoPlay
          src="https://cdnl.iconscout.com/lottie/premium/thumb/business-training-7245756-5901367.mp4"
          loop
          muted
          type="video/mp4"
          width={"100%"}
          height={"100%"}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;
