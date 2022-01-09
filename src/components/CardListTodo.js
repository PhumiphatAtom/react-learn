import React, { useState } from 'react';
import { Button, Card, Form, ListGroup, Modal } from 'react-bootstrap';

function CardListTodo({ name, data = [], onMove, targetName }) {
  return (
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
                  // handleShow();
                  // handleEditInput(item, index);
                }}
              >
                {'Edit'}
              </Button>
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
            </div>
          </ListGroup.Item>
        ))}
        {/* {console.log('close :', close)} */}
      </ListGroup>
    </Card>
  );
}

export default CardListTodo;
