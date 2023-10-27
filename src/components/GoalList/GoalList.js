import React from "react";
import "./GoalList.css";

const Goalist = (props) => {
  return (
    <ul className="goal-list">
      {props.goals.map((goal) => {
        return <li key={goal.id}>{goal.text}</li>;
      })}
    </ul>
  );
};

export default Goalist;
