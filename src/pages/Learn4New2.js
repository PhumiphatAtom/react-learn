import React, { useState } from 'react';
import { Button, Card, Form, ListGroup, Modal } from 'react-bootstrap';
import CardListTodo from '../components/CardListTodo';

export default function Learn4New2() {
  const [title, setTitle] = React.useState('');
  const [open, setOpen] = React.useState([]);
  const [close, setClose] = React.useState([]);
  const [edit, setEdit] = useState('');
  const [editIndex, setEditIndex] = useState();
  //**********Modal**********
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //*********Modal 1*********
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  function handleDelete(index) {
    const tempClose = close.filter((item2, index2) => {
      return index !== index2;
    });
    setClose(tempClose);
  }

  function handleEditInput(item, index) {
    setEdit(item);
    setEditIndex(index);
  }

  function handleEditOpen() {
    let tempOpen = [...open];
    tempOpen[editIndex] = edit;
    console.log('tempOpenEdit', tempOpen);
    setOpen(tempOpen);
    handleClose();
  }

  function handleEditClose() {
    let tempClose = [...close];
    tempClose[editIndex] = edit;
    console.log('tempCloseEdit', tempClose);
    setClose(tempClose);
    handleClose2();
  }
  // ----

  const [card, setCard] = useState({
    Open: {
      data: [],
      targetName: 'Inprogress',
    },
    Inprogress: {
      data: [],
      targetName: 'Close',
    },
    Close: {
      data: [],
      targetName: 'Done',
    },
    Done: {
      data: [],
      targetName: 'Open',
    },
  });
  function handleSubmit() {
    if (title !== '') {
      // setOpen([...open, title]);
      setCard({
        ...card,
        Open: {
          ...card.Open,
          data: [...card.Open.data, title],
        },
      });
      setTitle('');
    } else {
      alert('กรุณาพิมพ์');
    }
  }

  function handleMove(source, targetName) {
    let tempCard = { ...card };
    let dataArrSource = tempCard[source.name].data;
    let dataArrTarget = tempCard[targetName].data;
    tempCard[targetName].data = [...dataArrTarget, dataArrSource[source.index]]; // add data from source to target

    tempCard[source.name].data = dataArrSource.filter((item, index) => {
      return index !== source.index;
    });

    setCard(tempCard);
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h4>Issue Boards</h4>
      <div>
        <Form style={{ width: '18rem' }}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={title}
              type="text"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Form.Group>
        </Form>
        <Button
          className="mb-3"
          variant="primary"
          onClick={() => {
            handleSubmit();
          }}
        >
          Create Issue
        </Button>
      </div>
      <div style={{ display: 'flex', alignItems: 'start' }}>
        {Object.entries(card).map(([key, value]) => (
          <CardListTodo
            name={key}
            data={value.data}
            targetName={value.targetName}
            onMove={handleMove}
          />
        ))}
      </div>
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
          <Button
            variant="primary"
            onClick={() => {
              handleEditOpen();
            }}
          >
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
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
          <Button
            variant="primary"
            onClick={() => {
              handleEditClose();
            }}
          >
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
