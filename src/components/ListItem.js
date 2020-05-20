import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { completeToDo, updateTodo } from "../actions";
import Editable from "../components/Editable";

const ListItem = (props) => {
  const { todoId, todo } = props;
  const dispatch = useDispatch();
  const [task, setTask] = useState(todo.title);
  const [isEditing, setEditing] = useState(false);

  const inputRef = useRef(null);

  const completeClick = (completeTodoId) => {
    dispatch(completeToDo(completeTodoId));
  };

  const handleUpdateTask = (updateTask) => {
    setEditing(false);
    dispatch(updateTodo(updateTask, task))
  };

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <li key="toDoName">
      <Editable
        text={todo.title}
        placeholder="Write a task name"
        type="input"
        onSetEditing={() => setEditing(true)}
        isEditing={isEditing}
      >
        <input
          ref={inputRef}
          onBlur={() => handleUpdateTask(todoId)}
          type="text"
          name="task"
          placeholder="Write a task name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </Editable>
      {/* <h4>
        {todo.title}
        <span
          onClick={() => completeClick(todoId)}
          className="complete-todo-item waves-effect waves-light blue lighten-5 blue-text text-darken-4 btn-small"
        >
          <i className="material-icons">x</i>
        </span>
      </h4> */}
    </li>
  );
};

export default ListItem;
