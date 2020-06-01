import React, { Component } from "react";
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class CatsItem extends Component {
  render() {
    const { cat } = this.props;
    return (
      <Col xs={6} md={4}>
        <Image src={ cat.picturePath } rounded fluid/>
      </Col>
    );
  }
}

export default CatsItem;
