import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class CatsItem extends Component {
  render() {
    const { cat } = this.props;
    return (
      <Col xs={6} sm={4} md={3}>
        <Card className="text-center">
          <Card.Img variant="top" src={ cat.picturePath } alt={cat.name} />
          <Card.Body>
            <Card.Title>{ cat.name }</Card.Title>
            <NavLink to={`/details/${cat.id}`}>More details</NavLink>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default CatsItem;
