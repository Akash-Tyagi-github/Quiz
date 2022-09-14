import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import "./App.css";
import CountdownHook from "./Countdownhook";

function Login() {
  const [errorMessages, setErrorMessages] = useState({});

  const database = [
    {
      username: "akash",
      password: "pass1",
    },
    {
      username: "tyagi",
      password: "pass2",
    },
  ];
  let navigate = useNavigate();
  const submit = (event) => {
    event.preventDefault();
    // alert("Yes!");
    var { name, pswrd } = document.forms[0];
    console.log(name, pswrd);
    // if (name.value === "akash") {
    //   alert("akash here!");
    // }
    const userdata = database.find((e) => e.username === name.value);
    if (userdata) {
      // alert("user found");
      if (userdata.password !== pswrd.value) {
        setErrorMessages({ name: "pswrd", message: "Wrong Password!" });
      }
    } else {
      setErrorMessages({ name: "name", message: "User not found" });
    }
    // function giveErrorMesg(name)
    // {name===errorMessages.name ;
    //   <div className="error">{errorMessages.message}</div>
    // }
    if (userdata) {
      if (userdata.password == pswrd.value) {
        // navigate("./quiz");

        navigate("/choice");
      }
    }
  };

  const giveErrorMesg = (field) => {
    // alert("errormesg called");
    return (
      field === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      )
    );
  };

  return (
    <>
      <div className="main">
        <div className="loginbox">
          <h2>Quiz Login</h2>
          <form onSubmit={submit}>
            <div className="userbox">
              <label for="user">Username</label>
              <input
                type="text"
                id="user"
                name="name"
                placeholder="Enter username"
              />
              <div className="error"> {giveErrorMesg("name")}</div>
            </div>
            <div className="userbox">
              <label for="pswrd">Password</label>

              <input
                type="password"
                name="pswrd"
                id="pswrd"
                placeholder="Enter password"
              />

              <div className="error">{giveErrorMesg("pswrd")}</div>
            </div>
            <input
              type="submit"
              onClick={giveErrorMesg}
              value="LOG IN"
              className="button"
            />
          </form>
        </div>
        <div style={{position:"absolute",top:"85%",left:"45%"}}>
          <h1 style={{ color: "white",margin:"0px" }}>Information to login</h1>
          <h1 style={{ color: "white",margin:"0px" }}>Username is : akash</h1>
          <h1 style={{ color: "white",margin:"0px" }}>Password is&nbsp;&nbsp;:&nbsp;pass1</h1>
        </div>
      </div>
    </>
  );
}
export default Login;
