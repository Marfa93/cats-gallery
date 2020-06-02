import React, { Component } from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import CatsGallery from './CatsGallery';
import CatDetails from './CatDetails';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="content">
          <Container fluid>
            <h1 className="title">Cats gallery</h1>
            <Route exact path="/" component={CatsGallery}/>
            <Route path="/details/:catId" component={CatDetails}/>
          </Container>
        </div>
      </HashRouter>
    );
  }

}

export default Main;
