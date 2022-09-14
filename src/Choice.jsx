import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Choice = () => {
  let navigate = useNavigate();
  const choiceadmin = () => {
    navigate("/choice/admin");
    // navigate("./admin");

  };
  const choicestudent = () => {
    navigate("./quiz");
  };
  return (
    <>
      <div className="choice">
        <div className="choice1">
          <h1>Choose one of the following </h1>
          <div className="choice2">
            <button id="admin" onClick={choiceadmin}>
              As a admin
            </button>
            <button id="admin" onClick={choicestudent}>
              As a student
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Choice;
