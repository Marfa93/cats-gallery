import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CatsItem from './CatsItem.js';
import "./CatsGallery.css";

/*const catsMock = [
  {
    id: "1",
    name: "Robi",
    birthdate: "2015-03-29",
    breed: "Persian",
    location: "Paris refuge - 75",
    gender: "Male",
    picturePath: "http://placekitten.com/200/300"
  },
  {
    id: "2",
    name: "Toto",
    birthdate: "2014-09-25",
    breed: "Russian blue",
    location: "Marseille refuge - 13",
    gender: "Male",
    picturePath: "http://placekitten.com/400/300"
  },
  {
    id: "3",
    name: "Gus",
    birthdate: "2012-05-19",
    breed: "Persian",
    location: "Grenoble refuge - 38",
    gender: "Male",
    picturePath: "http://placekitten.com/500/300"
  },
  {
    id: "4",
    name: "Lulu",
    birthdate: "2013-06-20",
    breed: "Norwegian",
    location: "Bordeaux refuge - 33",
    gender: "Female",
    picturePath: "http://placekitten.com/200/250"
  }
];*/

class CatsGallery extends Component {
  constructor(props) {
    super(props);
    this.state = { cats: [] };
  }

  componentDidMount() {
    fetch('https://europe-west1-matters-test.cloudfunctions.net/getCats')
      .then(response => response.json())
      .then(data => {
        this.setState({
          cats: data
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }


  render() {
    const { cats } = this.state;
    return (
      <div className="gallery">
        <Container fluid>
          <h1 className="title">Cats gallery</h1>
          <Row>
            {cats.map(cat => (
              <CatsItem key={cat.id} cat={cat}/>
              /*<li key={cat.id} className="listItem">
                <img src={cat.picturePath} alt={cat.name} />
              </li>*/
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default CatsGallery;
