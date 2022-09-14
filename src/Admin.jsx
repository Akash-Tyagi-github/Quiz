import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Admin = () => {
  let arr = [];

  // const[count,setCount]=useState(0);
  let navigate = useNavigate();

  let counter = 0;
  function addques(e) {
    e.preventDefault();
    // alert(counter);
    var { question, optn1, optn2, optn3, optn4, correct } = document.forms[0];
    let obj = {
      ques: question.value,
      optn1: optn1.value,
      optn2: optn2.value,
      optn3: optn3.value,
      optn4: optn4.value,
      correct: correct.value,
    };
    console.log(obj);
    arr[counter] = obj;
    localStorage.setItem("data", JSON.stringify(arr));
    counter++;
    // question.value="";
  }
  // function gotoQuiz(e) {
  //   e.preventDefault();
  //   navigate("./choice/quiz");
  // }
  function gotoadminQuiz(e){
    e.preventDefault();
    navigate("/choice/admin/adminquiz");
  }
  return (
    <div className="bodyform">
      <form id="form1">
        <h1 id="qform">Question-Form</h1>
        <input
          type="text"
          className="optn"
          placeholder="Enter the question . . ."
          name="question"
          autoFocus
          autoComplete="off"
        />
        <input
          type="text"
          className="optn"
          id="optn1 "
          placeholder="Enter the option 1 . . ."
          name="optn1"
          autoComplete="off"
        />
        <input
          type="text"
          className="optn"
          id="optn2"
          placeholder="Enter the option 2 . . ."
          name="optn2"
          autoComplete="off"
        />
        <input
          type="text"
          className="optn"
          id="optn3"
          placeholder="Enter the option 3 . . ."
          name="optn3"
          autoComplete="off"
        />
        <input
          type="text"
          className="optn"
          id="optn4"
          placeholder="Enter the option 4 . . ."
          name="optn4"
          autoComplete="off"
        />
        <input
          type="text"
          className="optn"
          id="correct"
          placeholder="Enter the correct answer . . ."
          autoComplete="off"
        />
        <div className="loginbtns">
          <button id="savebtn" onClick={addques}>
            Add Next Question
          </button>
          <button id="savebtn" onClick={gotoadminQuiz}>
            Save Quiz
          </button>
        </div>
      </form>
    </div>
  );
};

export default Admin;
