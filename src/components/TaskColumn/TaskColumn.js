import React from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import "./TaskColumn.css";

export default function TaskColumn(props) {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo);
  const changeStatus = (id, status) => {
    debugger;
    dispatch({
      type: "CHANGE_STATUS",
      payload: {
        id,
        status,
      },
    });

    const task = {
      ...tasks.find((task) => task.id === id),
    };
    task.status = status;
    const currentTasks = tasks.filter((task) => task.id !== id).concat(task);
    localStorage.setItem("savedTasks", JSON.stringify(currentTasks));
  };
  // eslint-disable-next-line no-unused-vars
  const [{ isOver }, drop] = useDrop({
    accept: "TASK",
    drop: (item, monitor) => changeStatus(item.id, props.status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  return (
    <div className="task-column" ref={drop}>
      <div className={`header header-${props.status}`}>{props.label}</div>
      <div className="taskcolumn-body">
        {props.todolist.map((item) => {
          return <Card info={item} />;
        })}
      </div>
    </div>
  );
}
