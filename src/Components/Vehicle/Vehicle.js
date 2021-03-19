import React from "react";
import { Card,Button } from "react-bootstrap";

const Vehicle = (props) => {
  const {title,description,imgUrl} = props.vehicle;

  return (
    <div className="col-md-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Vehicle;
