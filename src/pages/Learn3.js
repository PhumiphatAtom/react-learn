import React, { useState } from "react";
import { Button, Card, Form, ListGroup, Modal } from "react-bootstrap";

export default function Learn3() {
  const [title, setTitle] = React.useState("");
  const [open, setOpen] = React.useState([]);
  const [close, setClose] = React.useState([]);
  const [edit, setEdit] = useState("");
  const [editIndex, setEditIndex] = useState();
  //*********Modal*********
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSubmit() {
    if (title !== "") {
      setOpen([...open, title]);
      setTitle("");
    } else {
      alert("กรุณาพิมพ์");
    }
  }

  function handleMove(item, index) {
    setClose([...close, item]);
    const tempOpen = open.filter((item2, index2) => {
      console.log("index1 : ", index, "index2 :", index2);
      return index !== index2;
    });
    setOpen(tempOpen);
  }

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

  function handleEdit() {
    let tempOpen = [...open];
    tempOpen[editIndex] = edit;
    console.log("tempOpenEdit", tempOpen);
    setOpen(tempOpen);
    handleClose();
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h4>Issue Boards</h4>
      <div>
        <Form style={{ width: "18rem" }}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={title}
              type="text"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
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
        {console.log(open)}
      </div>
      <div style={{ display: "flex", alignItems: "start" }}>
        <Card style={{ width: "18rem", marginRight: "1rem" }}>
          <Card.Header>Open</Card.Header>
          <ListGroup variant="flush">
            {open.map((item, index) => (
              <ListGroup.Item
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                }}
                key={item + index}
              >
                <div
                  style={{
                    wordBreak: "break-all",
                  }}
                >
                  {item}
                </div>
                <div>
                  <Button
                    variant="warning"
                    size="sm"
                    style={{ marginLeft: "1rem" }}
                    onClick={() => {
                      handleShow();
                      handleEditInput(item, index);
                    }}
                  >
                    {"Edit"}
                  </Button>
                  <Button
                    style={{ marginLeft: "1rem" }}
                    variant="success"
                    size="sm"
                    onClick={() => {
                      handleMove(item, index);
                    }}
                  >
                    {">>"}
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
            {console.log("close:", close)}
          </ListGroup>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Header>Close</Card.Header>
          <ListGroup variant="flush">
            {close.map((item, index) => (
              <ListGroup.Item
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                }}
                key={item + index}
              >
                <div
                  style={{
                    wordBreak: "break-all",
                  }}
                >
                  {item}
                </div>
                <Button
                  variant="danger"
                  style={{ marginLeft: "1rem" }}
                  size="sm"
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  Del
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form style={{ width: "18rem" }}>
            <Form.Group className="mb-3">
              <Form.Label>Edit Title</Form.Label>
              <Form.Control
                value={edit}
                type="text"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
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
              handleEdit();
            }}
          >
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
