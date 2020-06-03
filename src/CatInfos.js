import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ModalConfirm from './ModalConfirm.js'

class CatInfos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      appointmentDate: null
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.makeAppointement = this.makeAppointement.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  makeAppointement() {
    const { id: catId } = this.props.cat;
    fetch(
      'https://europe-west1-matters-test.cloudfunctions.net/getAdoptionAppointment',
      {
        method: 'post',
        body: JSON.stringify({ catId: parseInt(catId) }),
        headers: { 'Content-Type': 'application/json' }
      }
    )
      .then(response => {
        if (!response.ok) {
          throw response
        }
        return response.json();
      })
      .then(data => {
        this.setState({ appointmentDate: this.formatDate(data.appointment) });
        this.handleOpenModal();
      })
      .catch((error) => {
        this.handleCloseModal();
        alert("Request error. Please try again");
        console.error('Error:', error);
      });
  }

  formatDate(dateString) {
    const dateObject = new Date(dateString);
    return dateObject.toLocaleDateString("en-GB");
  }

  render() {
    const { cat } = this.props;
    return (
      <>
        <h1>{cat.name}</h1>
        <h3>Birthdate: {cat.birthdate}</h3>
        <h3>Gender: {cat.gender}</h3>
        <h3>Breed: {cat.breed}</h3>

        <Button onClick={this.makeAppointement}>Make an appointement to adopt</Button>

        <ModalConfirm
          show={this.state.showModal}
          onHide={() => this.handleCloseModal()}
          location={cat.location}
          catName={cat.name}
          appointmentDate={this.state.appointmentDate}
        />
      </>
    )
  }
}

export default CatInfos;
