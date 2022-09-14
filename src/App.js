import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Login from "./Loginpage";
import Questionpage from "./Questionpage";
import Countdown1 from "./Countdown";
import { Routes, Route } from "react-router-dom";
import Choice from "./Choice";
import Admin from "./Admin";
import Adminquiz from "./Adminquiz";
function App() {
  return (
    <>

      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/choice" element={<Choice/>}/>
        <Route exact path ="/choice/admin" element={<Admin/>}/>
        <Route exact path="/choice/quiz" element={<Questionpage/>} />
        <Route exact path="/choice/admin/choice/quiz" element={<Questionpage/>} />
        <Route exact path="/choice/admin/adminquiz" element={<Adminquiz/>}/>

      </Routes>
    </>
  );
}
export default App;

{/* <Admin /> */}
{
  /* <Choice/> */
}
// <Questionpage/>
{
  /* <Countdown1/> */
}
