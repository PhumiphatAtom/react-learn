import React, { useState } from 'react';
import { Button, Card, Form, ListGroup, Modal } from 'react-bootstrap';
import CardListTodo from '../components/CardListTodo';

export default function Learn4New2() {
  const [title, setTitle] = React.useState('');
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
      targetName: '',
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

  const handleSubmitEdit = (data) => {
    //{ name, index: editIndex, newValue: edit }
    let tempCard = { ...card };
    let dataArr = tempCard[data.name].data;
    dataArr[data.index] = data.newValue;
    setCard(tempCard);
  };

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
            onSubmitEdit={handleSubmitEdit}
          />
        ))}
      </div>
    </div>
  );
}
