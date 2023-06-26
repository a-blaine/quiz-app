import React from "react";

export default function Question({ questions, loaded }) {
  if (loaded) {
    return (
      <div className="Question">
        {questions.map((question, index) => {
          let incorrect = questions[index].incorrect_answers;
          let correct = questions[index].correct_answer;
          const allAnswers = [...incorrect, correct];

          return (
            <div key={index}>
              <h2>
                {index + 1}. {""}
                {question.question}
              </h2>
              <ul>
                {allAnswers.map((answer, index) => {
                  return <li kay={index}>{answer}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div>Searching..</div>;
  }
}
