import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AddToDo from "./AddToDo";
import AllToDo from "./AllToDo";
import DoneToDo from "./DoneToDo";
import Process from "./Process";

const timeers = new Date().getHours();
const timerMinutes = new Date().getMinutes();

const timeObj = { hour: timeers, minute: timerMinutes };

const ToDoApp = () => {
  const [allToDos, setAllToDos] = useState([]);
  const [doneToDos, setDoneToDos] = useState([]);
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState("");

  const addToDo = () => {
    if (allToDos.includes(value) || !value) {
      toast.error("Bu todo sizda mavjud");
    } else {
      setAllToDos([...allToDos, value]);
    }
    setValue("");
  };

  const confirmToDo = (todo) => {
    setDoneToDos([...doneToDos, todo]);
    setAllToDos(allToDos.filter((item) => item !== todo));
  };

  const deleteToDo = (todo) => {
    setDoneToDos(doneToDos.filter((item) => item !== todo));
  };

  const editToDo = (todo) => {
    setValue(todo);
    setSelected(todo);
  };

  const saveToDo = () => {
    setAllToDos(
      allToDos.map((item) => {
        if (item === selected) {
          return value;
        } else {
          return item;
        }
      })
    );
    setSelected("");
    setValue("");
  };

  const handleInput = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const percent =
    (doneToDos.length / (allToDos.length + doneToDos.length)) * 100 || 0;

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-6">
            <AddToDo
              handleInput={handleInput}
              addToDo={addToDo}
              value={value}
              selected={selected}
              saveToDo={saveToDo}
            />
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-3">
          <div className="col-12 col-lg-8">
            <Process percent={percent} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-lg-6 ">
            <AllToDo
              todos={allToDos}
              confirmHandler={confirmToDo}
              editToDo={editToDo}
            />
          </div>
          {/* <div className="col-lg-2"></div> */}
          <div className="col-12 col-lg-6 ">
            <DoneToDo doneToDos={doneToDos} onDeleteToDo={deleteToDo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoApp;
