import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { NavLink } from 'react-router-dom';

class CatDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cat: {}
    };
  }

  componentDidMount() {
    const { catId } = this.props.match.params;
    fetch('https://europe-west1-matters-test.cloudfunctions.net/getCats')
      .then(response => response.json())
      .then(data => {
        this.setState({
          cat: data.find(cat => cat.id === catId)
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  render() {
    const { cat } = this.state;
    let content;

    if (cat) {
      content = this.renderCatDetail();
    } else {
      content = this.renderNoCatFound();
    }

    return (
      <div className="details">
        <Row>
          { content }
          <Col xs={12}>
            <NavLink exact to="/">Back to Cats Gallery</NavLink>
          </Col>
        </Row>
      </div>
    );
  }

  renderNoCatFound() {
    return (
      <Col xs={12}>
        <p>Kitten not found :(</p>
      </Col>
    );
  }

  renderCatDetail() {
    const { cat } = this.state;

    return (
      <>
        <Col sm={6}>
          <Image src={ cat.picturePath } alt={cat.name} rounded fluid/>
        </Col>

        <Col sm={6}>
          <h1>Name : {cat.name}</h1>
        </Col>
      </>
    );
  }
}

export default CatDetails;
