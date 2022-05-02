import React from "react";
import { Input, InputGroup, InputGroupText } from "reactstrap";

const AddToDo = ({ handleInput, addToDo, value, selected, saveToDo }) => {
  return (
    <div className="mt-3">
      <InputGroup className="m-auto">
        <Input
          placeholder="To do yozing"
          onChange={handleInput}
          value={value}
        />
        <InputGroupText
          className="btn btn-success"
          onClick={selected ? saveToDo : addToDo}
        >
          {selected ? "Save" : "Add To Do"}
        </InputGroupText>
      </InputGroup>
    </div>
  );
};

export default AddToDo;
