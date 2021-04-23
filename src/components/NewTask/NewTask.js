import React, { useState } from "react";
import { Radio } from "antd";
import "./NewTask.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const options = [
  { label: "To-Do", value: "todo" },
  { label: "In-Progress", value: "inprogress" },
  { label: "Done", value: "done" },
];

export default function NewTask() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo);
  const history = useHistory();

  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [tempError, setTempError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && description && status) {
      setTempError(false);
      const taskData = { taskName, description, status, id: uuidv4() };
      console.log(taskData);
      const action = {
        type: "ADD_TODO",
        payload: taskData,
      };
      dispatch(action);

      //save array of tasks to localStorage
      localStorage.setItem("savedTasks", JSON.stringify([...tasks, taskData]));

      // redirect to homepage
      history.push("/");
    } else {
      setTempError(true);
    }
  };
  return (
    <div>
      <form id="newTaskForm" onSubmit={handleSubmit}>
        <div>
          <div className="create-task-wrapper">
            {tempError && (
              <div style={{ color: "red" }}>Please fill in all the fields</div>
            )}
            <div className="create-task-name">
              <label className="task-name-label">
                Enter Task Name
                <div>
                  <input
                    className="input-new-task"
                    type="text"
                    placeholder="Task Name"
                    name="taskName"
                    onChange={(e) => setTaskName(e.target.value)}
                  />
                </div>
              </label>
            </div>
            <div className="description">
              <label className="label-description">
                Enter Description
                <div>
                  <textarea
                    className="task-description"
                    placeholder="Description"
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </label>
            </div>
            <div className="branch-to">
              <div className="branch-to-label">Branch to</div>
              <div>
                <Radio.Group
                  options={options}
                  onChange={(e) => setStatus(e.target.value)}
                  optionType="button"
                  name="status"
                />
              </div>
            </div>
            <div>
              <Link to="/" rel="noopener noreferrer">
                <button type="button" className="btn-cancel">
                  Cancel
                </button>
              </Link>
              <button type="submit" className="btn-create">
                Create
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
