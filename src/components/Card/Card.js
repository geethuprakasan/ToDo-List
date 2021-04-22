import React from "react";
import { useDrag } from "react-dnd";
import "./Card.css";

export default function Card({ info }) {
  // eslint-disable-next-line no-unused-vars
  const [{ isDragging }, drag] = useDrag({
    item: {
      taskName: info.taskName,
      description: info.description,
      status: info.status,
      id: info.id,
    },
    type: "TASK",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return (
    <div className="card" ref={drag}>
      <div className="card-name">{info.taskName}</div>
      <div> {info.description} </div>
    </div>
  );
}
