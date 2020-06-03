import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class ModalConfirm extends Component {
  render() {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        centered
        {...this.props}
      >
        <Modal.Header closeButton>
          <Modal.Title>Appointment request</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>
            Thank you !
          </p>
          <p>
            Let's meet at "{this.props.location}" the {this.props.appointmentDate} to
            finalize {this.props.catName}'s adoption.
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalConfirm;
