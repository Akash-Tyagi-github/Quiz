import React, { useState } from "react";
import { ReactDOM } from "react";
import "./App.css";
import CountdownHook from "./Countdownhook";
import Questionbank from "./Questionbank";
import { bank } from "./Questionbank";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cont2 from "./Cont2";
import { Spin } from 'antd';
import "./App1.css";
import 'antd/dist/antd.css';


const Questionpage = () => {
  const [isFetching, setisFetching] = useState(true);
  let navigate = useNavigate();
  // return navigate("/");
  let arr=localStorage.getItem("data");
  let final=JSON.parse(arr);
console.log(final);
  const bank = [
    {
      ques: "What HTML stands for ?",
      a: "HyperText MarkUp Language",
      b: "HyperText MarkUp Limited",
      c: "HyperText MarkUp London",
      d: "HyperText Markup Ltd",
      correct: "HyperText MarkUp Language",
    },
    {
      ques: "What CSS stands for ?",
      a: "Cascading Style sheet",
      b: "Cascading Story Sunset",
      c: "HyperText MarkUp Language",
      d: "Cascading Markup Sheet",
      correct: "Cascading Style sheet",
    },
    {
      ques: "What NATO stands for ?",
      a: "Cascading Style sheet",
      b: "Cascading Story Sunset",
      c: "North Atlantic Treaty Organisation",
      d: "Cascading Markup Sheet",
      correct: "North Atlantic Treaty Organisation",
    },
    {
      ques: "Find the correct spelling ?",
      a: "Epitomy",
      b: "Eptaumy",
      c: "Eptoomy",
      d: "Epitaum",
      correct: "Epitomy",
    },
  ];
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  //  ----------------------------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  let Nextques = () => {
{/* <Spin/> */}

    if (count < final.length - 1) {
      setCount(count + 1);
      if (
        document.querySelector('input[id="radio"]:checked').value ===
        final[count].correct
      ) {
        setScore(score + 1);
        // alert(`score : ${score}`);
        console.log(document.querySelector('input[id="radio"]:checked').value);
      }
      // alert(`score : ${score}`);

    } else {
      setCount(count + 1);
      if (
        document.querySelector('input[id="radio"]:checked').value ==
        final[count].correct
      ) {
        setScore(score + 1);
      }
      // alert(`score : ${score}`);
      // alert("Reached at last ques");
      // <Questionbank/>
    }
    const unchecked = document.querySelector('input[id="radio"]:checked');

    unchecked.checked = false;

    // let myfunction1=()=> {
    //   let i = 10;
    //   function myfunction() {
    //     if (i > 0) {
    //       i = i - 1;
    //       document.getElementById("timer1").innerHTML = i+"s";
    //     }
    //   }
    //   setInterval(myfunction, 1000);
    // }
    // myfunction1();
  };
  // ----------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  let Prevques = () => {
    // let prevq = count - 1;
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Reached at Ques. 1");
    }
  };
// let mypopup=()=>{
//   alert("Time up !!");
// }
// let MyTimeout=setTimeout(mypopup,12000);

  // let myfunction1=()=> {
  //   let i = 11;
  //   function myfunction() {
  //     if (i > 0) {
  //       i = i - 1;
  //       document.getElementById("timer1").innerHTML = "00 : "+i+"s";
  //     }
  //   }
  //   setInterval(myfunction, 1000);
  // }
  // myfunction1();

  let gotologin=()=>{
    navigate("/");
  }

  const list =[];
  for(let i=1;i<=final.length;i++)
  {
    list.push(<a >{i}</a>);
  }
  //------------------------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// loader---spinner
  useEffect(() => {
    setTimeout(function () {
      console.log("Delayed for 1 second."); 
      setisFetching(false); 
    }, 2000);
  }, []);
  if (isFetching) {
    return (
      <div className="loader">
        <Spin size="large"></Spin>
      </div>
    );
  }
// ------------------------------------->>>>>>>>>>>>>>>>>>>>


// ------------------------------------------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  if (count < final.length ) {
    return (
      <div className="questionpage">
        <div className="cont1">
          <div className="heading">
            <h2 id="section">Section : General Quiz</h2>
          </div>
          <div className="questionbar">
            <span id="qtag">Question {count + 1} :</span>
            {/* <span id="timer">Time left | <span id="timer1"></span></span> */}

          </div>

          <div className="questioncontent">
            <span id="qtagcontent">{final[count].ques}</span>
            
            <div class="optionbox">
              <input
                type="radio"
                id="radio"
                name="samename"
                value={final[count].optn1}
              />
              <span id="option">{final[count].optn1}</span>
            </div>
            <div class="optionbox">
              <input
                type="radio"
                id="radio"
                name="samename"
                value={final[count].optn2}
              />
              <span id="option">{final[count].optn2}</span>
            </div>
            <div class="optionbox">
              <input
                type="radio"
                id="radio"
                name="samename"
                value={final[count].optn3}
              />
              <span id="option">{final[count].optn3}</span>
            </div>
            <div class="optionbox">
              <input
                type="radio"
                id="radio"
                name="samename"
                value={final[count].optn4}
              />
              <span id="option">{final[count].optn4}</span>
            </div>
          </div>
          <div className="btns">
            <button id="btn" onClick={Prevques}>
              Previous
            </button>
            <button id="btn" onClick={Nextques}>
              Next
            </button>
          </div>
        </div>
        <div className="cont2">
          <h4>name</h4>
          <h4>allset@gmail.com</h4>

          <div className="section">
            <h3>Questions</h3>
          </div>
          <div className="number">
            
             
            {list}
              

        {/* <Cont2/> */}
           
            
  
          </div>
        </div>
      </div>
    );
  }
  // else return <Questionbank />;
  else {
    return (
      <>
        <div className="finalpage">
          <div className="finalresultbox">
            <h1 id="finalmesg">Quiz Completed</h1>
            <h3 id="finalscore">{`You have scored ${score}/${final.length}`}</h3>
            <button onClick={gotologin} id="btnout">
              Log out
            </button>
          </div>
        </div>
      </>
    );
  }
};
// ------------------------------------------------------------------->>>>>>>>>>
// trialloader

// ------------------------------------------>>>>>>>>>>>>>
export default Questionpage;
// export {final};