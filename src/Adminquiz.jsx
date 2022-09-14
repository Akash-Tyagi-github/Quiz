import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./App.css";

const Adminquiz = () => {
  let arr = localStorage.getItem("data");
  let final = JSON.parse(arr);
  let navigate = useNavigate();
  const [counter, setCounter] = useState(0);

  // function edit1(e) {
  //   e.preventDefault();
  //   console.log("in the d edit!");

  //   const newNode = document.createElement("input");
  //   const parentDiv = document.getElementById("childElement").parentNode;
  //   const sp2 = document.getElementById("childElement");
  //   newNode.type = "text";
  //   newNode.id = "text";
  //   newNode.value = sp2.textContent;
  //   parentDiv.insertBefore(newNode, sp2);
  //   parentDiv.removeChild(sp2);
  //   //   document.getElementById("btnsave").textContent = "Save";
  // }
  // let save1 = (e) => {
  //   e.preventDefault();

  //   let elem = document.querySelector("input").value;
  //   const newNode = document.createElement("span");
  //   newNode.id = "childElement";
  //   const parentDiv = document.getElementById("text").parentNode;
  //   const sp2 = document.getElementById("text");
  //   newNode.textContent = sp2.value;
  //   final[0].ques = newNode.textContent;
  //   localStorage.setItem("data", JSON.stringify(final));
  //   parentDiv.insertBefore(newNode, sp2);
  //   parentDiv.removeChild(sp2);
  // };
  // let replace = () => {};

  const ref = (arg) => {
    const newhtml = document.getElementsByClassName(`${arg}`);
    const replacehtml = `<li className="child" id="childElement" value={index}>
   Q.${arg + 1} <input classname="field1" placeholder=${
      final[arg].ques
    }></input>
   </li>
   <li className="child" id="childElement"  value={index}>
A. <input classname="field1" placeholder=${final[arg].ques}></input>
   </li>
   <li className="child" id="childElement"  value={index}>
   B.  <input classname="field1" placeholder=${final[arg].optn1}></input>
   </li>
   <li className="child" id="childElement"  value={index}>
   C.  <input classname="field1" placeholder=${final[arg].optn2}></input>
   </li>
   <li className="child" id="childElement"  value={index}>
   D. <input classname="field1" placeholder=${final[arg].optn3}></input>
   </li>
   <li className="child" id="childElement"  value={index}>
   Ans. <input classname="field1" placeholder=${final[arg].optn4}></input>
   </li>`;
    newhtml[0].innerHTML = replacehtml;
  };
  const ref1 = (arg) => {
    let elem = document.querySelectorAll("input");
    const newhtml = document.getElementsByClassName(`${arg}`);
    console.log(final[arg].ques);
    console.log(elem[0].value);

    let obj = {
      ques: elem[0].value,
      optn1: elem[1].value,
      optn2: elem[2].value,
      optn3: elem[3].value,
      optn4: elem[3].value,
      correct:elem[4].value
      // correct: correct.value,
    };
    final[arg] = obj;
    localStorage.setItem("data", JSON.stringify(final));
    const replacehtml = `<li className="child" id="childElement" value={index}>
   Q.${arg + 1} ${final[arg].ques}
 </li>
 <li className="child" id="childElement"  value={index}>
 
     A. ${final[arg].optn1}
   
 </li>
 <li className="child" id="childElement"  value={index}>
   B.  ${final[arg].optn2}
 </li>
 <li className="child" id="childElement"  value={index}>
   C.  ${final[arg].optn3}
 </li>
 <li className="child" id="childElement"  value={index}>
   D.  ${final[arg].optn4}
 </li>
 <li className="child" id="childElement"  value={index}>
 Ans.  ${final[arg].correct}
</li>`;
    newhtml[0].innerHTML = replacehtml;
  };
  const ref2 = (arg) => {
    final.splice(arg, 1);
    localStorage.setItem("data", JSON.stringify(final));
    window.location.reload(false);
  };
  const listQues = final.map((element, index) => {
    // console.log(element);
    // console.log(index);
    return (
      <>
        <ul id="parentElement " className={index} value={index}>
          <li className="child" id="childElement" value={index}>
            Q.{index + 1} {element.ques}
          </li>
          <li className="child" id="childElement child" value={index}>
            A. {element.optn1}
          </li>
          <li className="child" id="childElement child" value={index}>
            B. {element.optn2}
          </li>
          <li className="child" id="childElement child" value={index}>
            C. {element.optn3}
          </li>
          <li className="child" id="childElement child" value={index}>
            D. {element.optn4}
          </li>
          <li className="child" id="childElement child" value={index}>
            Ans. {element.correct}
          </li>
        </ul>
        <div className="mybtns">
          <button
            id="mybtns1"
            onClick={() => {
              ref(index);
            }}
          >
            Edit
          </button>
          <button
            id="mybtns1"
            onClick={() => {
              ref1(index);
            }}
          >
            Save
          </button>
          <button id="mybtns1" onClick={ref2}>
            Delete
          </button>
        </div>
      </>
    );
  });
  // const ref2= (arg)=>{
  //   final.splice(arg);
  //   localStorage.setItem("data",JSON.stringify(final));
  // listQues();}
  const gotoquiz = () => {
    navigate("/choice/quiz");
  };
  return (
    <>
      <div className="displayques">
        <h1 id="qanda">List of Q & A</h1>
        {listQues}
        <button id="mybtns2" onClick={gotoquiz}>
          Attempt Quiz
        </button>
      </div>
    </>
  );
};

export default Adminquiz;
