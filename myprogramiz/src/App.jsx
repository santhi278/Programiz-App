import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./login.jsx";
import SignUp from "./signUp.jsx";
import Python from "./python.jsx";
import JavaScript from "./JavaScript.jsx";
import Home from "./Home.jsx";
import TypeScript from "./TypeScript.jsx";
import Java from "./Java.jsx";
import C from "./C.jsx";

   
    


function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element = {<SignUp/>} ></Route>  
      <Route path="/login" element = {<Login/>}></Route>
    <Route path="/py" element = {<Python/>}></Route>
    <Route path="/js" element = {<JavaScript/>}></Route>
    <Route path="/home" element = {<Home/>}></Route>
    <Route path="/C" element = {<C/>}></Route>
    <Route path="/Java" element = {<Java/>}></Route>
    <Route path="/TypeScript" element = {<TypeScript/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App