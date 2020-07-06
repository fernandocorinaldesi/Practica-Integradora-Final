import React from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default function modalingresar2(props) {
    const {open,handleSubmit,handleClose} = props;
    return (
        <div>
            <Modal  show={open} onHide={handleClose} backdrop='static' dialogClassName="modal-40w" keyboard={false}>          <Modal.Header>
            <Modal.Title>Ingresar Tutorial</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Titulo</Form.Label>
                <Form.Control required maxLength="255" name="titulo" type="text" placeholder="Ingresar el titulo" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Descripcion</Form.Label>
                <Form.Control required maxLength="255" name="descripcion" as="textarea" rows="3" placeholder="Ingresar la descripcion" />
              </Form.Group>
              <Button variant="primary"  className="mr-2" type="submit">
                Ingresar
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Cancelar
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
        </div>
    )
}
