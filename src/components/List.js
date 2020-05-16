import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { addToDo, fetchToDos } from "../actions";
import ListItem from "./ListItem";
import "./style.css";

const List = (props) => {
  const { data } = useSelector((state) => state);
  const [showForm, setShowForm] = useState(false);
  const [formValue, setFormValue] = useState("");
  const dispatch = useDispatch();

  const inputChange = (event) => {
    setFormValue(event.target.value);
  };

  const formSubmit = (event) => {
    console.log("formValue", formValue);
    event.preventDefault();
    dispatch(addToDo({ title: formValue }));
    setFormValue("");
  };

  const renderForm = () => {
    if (showForm) {
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
    }
  };
  const renderToDo = () => {
    const toDos = _.map(data, (value, key) => {
      return <ListItem key={key} todoId={key} todo={value} />;
    });
    if (!_.isEmpty(toDos)) {
      return toDos;
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
      <div className="fixed-action-btn">
        <button
          onClick={() => setShowForm(!showForm)}
          className="btn-floating btn-large black darken-4"
        >
          {showForm ? (
            <i className="large material-icons">-</i>
          ) : (
            <i className="large material-icons">+</i>
          )}
        </button>
      </div>
    </div>
  );
};

export default List;
