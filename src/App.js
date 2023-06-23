import "./App.scss";
import React, { useEffect, useState } from "react";
import QuestionContainer from "./containers/QuestionContainer";
import ScheduledTests from "./containers/ScheduledTests";
import QuestionSelector from "./containers/QuestionSelectorContainer";
import HomeContainer from "./containers/HomeContainer";
// import { SplitScreen } from "./split_screen/SplitScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const LeftHandComponent = ({ name }) => {
//   return <h1 style={{ backgroundColor: "green" }}>{name}</h1>;
// };

// const RightHandComponent = ({ message }) => {
//   return <h1 style={{ backgroundColor: "blue" }}>{message}</h1>;
// };
// function App() {
//   return <SplitScreen leftWeight={1} rightWeight={3}>
//     <LeftHandComponent name="santhosh"/>
//     <RightHandComponent message="Hello"/>
//   </SplitScreen>;
// }
function App() {

  useEffect(() => {
    
    const rightClickCallback = (event)=>{
      event.preventDefault()
    }
    // window.addEventListener('contextmenu', rightClickCallback);
    return () => {
      window.removeEventListener("contextmenu", rightClickCallback);
    
    }
    
  }, []);

  return (
      <Router>
        <Routes >
          <Route path="/" exact element={<QuestionSelector />}></Route>
          <Route path="/home" exact element={<HomeContainer />}></Route>
          <Route
            path="/question/:questionId"
            exact
            element={<QuestionContainer />}
          ></Route>
          QuestionSelector
          <Route>404 No Found!</Route>
        </Routes>
      </Router>
  );
}

export default App;
