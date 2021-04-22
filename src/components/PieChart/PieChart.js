import React from "react";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";

export default function Analytics() {
  const todoList = useSelector((state) => state.todo);

  let todoCount = 0;
  let inProgressCount = 0;
  let doneCount = 0;

  todoList.forEach((item) => {
    if (item.status === "todo") {
      todoCount++;
    } else if (item.status === "inprogress") {
      inProgressCount++;
    } else if (item.status === "done") {
      doneCount++;
    }
  });

  const state = {
    labels: ["To-Do", "In-Progress", "Done"],
    datasets: [
      {
        label: "Tasks",
        backgroundColor: ["#F2C94C", "#27AE60", "#2F80ED"],
        data: [todoCount, inProgressCount, doneCount],
      },
    ],
  };
  return (
    <div>
      <Pie
        data={state}
        options={{
          title: {
            display: true,
            text: "Your Tasks Trends in this week",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "bottom",
          },
        }}
      />
    </div>
  );
}
