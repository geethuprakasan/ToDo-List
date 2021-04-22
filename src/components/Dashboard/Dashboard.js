import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TaskColumn from "../TaskColumn/TaskColumn";
import "./Dashboard.css";

export default function Dashboard() {
  const todoList = useSelector((state) => state.todo);
  const tasksInTodoStatus = todoList.filter((item) => item.status === "todo");
  const tasksInProgressStatus = todoList.filter(
    (item) => item.status === "inprogress"
  );
  const tasksInDoneStatus = todoList.filter((item) => item.status === "done");
  return (
    <div className="home-page">
      <div className="homepage-header">
        <Link to="/newtask" rel="noopener noreferrer">
          <button type="button" className="header-btn">
            New Task
          </button>
        </Link>
      </div>
      <div className="homepage-content">
        <TaskColumn
          status={"todo"}
          label="To-Do"
          todolist={tasksInTodoStatus}
        />
        <TaskColumn
          status={"inprogress"}
          label="In-progress"
          todolist={tasksInProgressStatus}
        />
        <TaskColumn status={"done"} label="Done" todolist={tasksInDoneStatus} />
      </div>
    </div>
  );
}
