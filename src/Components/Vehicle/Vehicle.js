import React from "react";
import { Card,Button } from "react-bootstrap";
import { useHistory } from "react-router";

const Vehicle = (props) => {
  const {title,description,imgUrl,id} = props.vehicle;
  const history = useHistory();
  const handleRoute = () => {
    history.push(`transport/${id}`)
  }

  return (
    <div className="col-md-3 col-sm">
      <Card style={{ width: "18rem" }}>
        <Card.Img  className="" variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button variant="primary" onClick={handleRoute}>Hire your Vehicle</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Vehicle;
