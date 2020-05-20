import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { addToDo, fetchToDos } from "../actions";
import ListItem from "./ListItem";
import "./style.css";

const List = (props) => {
  const { data } = useSelector((state) => state);
  const [formValue, setFormValue] = useState("");
  const dispatch = useDispatch();

  const inputChange = (event) => {
    setFormValue(event.target.value);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    dispatch(addToDo({ title: formValue }));
    setFormValue("");
  };

  const renderForm = () => {
    return (
      <div id="todo-add-form" className="col s10 offset-s1">
        <form onSubmit={formSubmit}>
          <div className="input-field">
            <input
              value={formValue}
              onChange={inputChange}
              id="toDoNext"
              type="text"
            />
            <label htmlFor="toDoNext">What Next?</label>
          </div>
        </form>
      </div>
    );
  };
  const renderToDo = () => {
    const toDos = _.map(data, (value, key) => {
      return <ListItem key={key} todoId={key} todo={value} />;
    });
    if (!_.isEmpty(toDos)) {
      return <div className="col s10 offset-s1"><ol>{toDos}</ol></div>;
    }
    return (
      <div className="col s10 offset-s1 center-align">
        <h4>You have no more things ToDo!</h4>
      </div>
    );
  };

  useEffect(() => {
    dispatch(fetchToDos());
  }, [dispatch]);

  return (
    <div className="to-do-list-container">
      <div className="row">
        {renderForm()}
        {renderToDo()}
      </div>
    </div>
  );
};

export default List;
