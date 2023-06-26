import React, { useState, useContext } from "react";
import "./App.css";
import EndScreen from "./Components/EndScreen";
import Home from "./Components/Home";
import Quiz from "./Components/Quiz";
import { QuizContext } from "./Helpers/Contexts";

function App() {
  const [quizState, setQuizState] = useState("home");

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{ quizState, setQuizState }}>
        {quizState === "home" && <Home />}
        {quizState === "quiz" && <Quiz />}
        {quizState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
