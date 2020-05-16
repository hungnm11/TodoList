import React from "react";
import { useDispatch } from "react-redux";
import { completeToDo } from "../actions";

const ListItem = (props) => {
  const dispatch = useDispatch();
  const completeClick = (completeTodoId) => {
    dispatch(completeToDo(completeTodoId));
  };
  const { todoId, todo } = props;
  return (
    <div key="toDoName" className="col s10 offset-s1 to-do-list-item black">
      <h4>
        {todo.title}
        <span
          onClick={() => completeClick(todoId)}
          className="complete-todo-item waves-effect waves-light blue lighten-5 blue-text text-darken-4 btn"
        >
          <i className="material-icons">Done</i>
        </span>
      </h4>
    </div>
  );
};

export default ListItem;
