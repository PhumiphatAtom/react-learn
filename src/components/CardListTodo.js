import React, { useState } from 'react';
import { Button, Card, Form, ListGroup, Modal } from 'react-bootstrap';

function CardListTodo({ name, data = [], onMove, targetName, onSubmitEdit }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [editIndex, setEditIndex] = useState();
  const [edit, setEdit] = useState('');
  const handleEditInput = (item, index) => {
    setEdit(item);
    setEditIndex(index);
  };

  const handleSubmitEdit = () => {
    onSubmitEdit({ name, index: editIndex, newValue: edit }); // callback
    handleClose();
  };
  return (
    <React.Fragment>
      <Card style={{ width: '18rem', marginRight: '1rem' }}>
        <Card.Header>{name}</Card.Header>
        <ListGroup variant="flush">
          {data.map((item, index) => (
            <ListGroup.Item
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
              }}
              key={item + index}
            >
              <div
                style={{
                  wordBreak: 'break-all',
                }}
              >
                {item}
              </div>
              <div>
                <Button
                  variant="warning"
                  size="sm"
                  style={{ marginLeft: '1rem' }}
                  onClick={() => {
                    handleShow();
                    handleEditInput(item, index);
                  }}
                >
                  {'Edit'}
                </Button>
                {targetName !== '' ? (
                  <Button
                    style={{ marginLeft: '1rem' }}
                    variant="success"
                    size="sm"
                    onClick={() => {
                      onMove({ name, index }, targetName);
                      // handleMove(item, index);
                    }}
                  >
                    {'>>'}
                  </Button>
                ) : (
                  <Button
                    variant="danger"
                    style={{ marginLeft: '1rem' }}
                    size="sm"
                    onClick={() => {
                      // handleDelete(index);
                    }}
                  >
                    Del
                  </Button>
                )}
              </div>
            </ListGroup.Item>
          ))}
          {/* {console.log('close :', close)} */}
        </ListGroup>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form style={{ width: '18rem' }}>
            <Form.Group className="mb-3">
              <Form.Label>Edit Title</Form.Label>
              <Form.Control
                value={edit}
                type="text"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault(); //ไม่ให้รีเฟรสเว็บ
                  }
                }}
                onChange={(e) => {
                  setEdit(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitEdit}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default CardListTodo;
