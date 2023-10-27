import React from "react";

import "./NewGoal.css";

const NewGoal = (props) => {
  const newGoalhandler = (event) => {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: "My new goal!",
    };
    //console.log(newGoal);
    props.onAddGoal(newGoal);
  };
  return (
    <form className="new-goal" onSubmit={newGoalhandler}>
      <input type="text" />
      <button type="submit">Add a goal</button>
    </form>
  );
};

export default NewGoal;
