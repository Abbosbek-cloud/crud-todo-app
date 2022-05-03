import React from "react";
import { Alert, Badge, Button, ListGroup, ListGroupItem } from "reactstrap";
import { AiOutlineDelete } from "react-icons/ai";

const DoneToDo = ({ doneToDos, onDeleteToDo }) => {
  const time = "12:36";
  return (
    <div className="">
      {doneToDos.length !== 0 ? (
        <ListGroup>
          {doneToDos.map((todo) => (
            <ListGroupItem
              key={todo}
              className="d-flex justify-content-between align-items-center"
            >
              <p className="mb-0">{todo}</p>
              <Button onClick={() => onDeleteToDo(todo)} color="danger">
                <AiOutlineDelete />
              </Button>
            </ListGroupItem>
          ))}
        </ListGroup>
      ) : (
        <Alert color="warning">Halicha todo qo'shilmagan</Alert>
      )}
    </div>
  );
};

export default React.memo(DoneToDo);
