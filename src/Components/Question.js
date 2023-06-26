import React from "react";

export default function Question({ answers, index, question }) {
  return (
    <div key={index}>
      <h2>
        {index + 1}. {""}
        {question.question}
      </h2>
      <div className="options">
        {answers.map((answer, index) => {
          return <button key={index}>{answer}</button>;
        })}
      </div>
    </div>
  );
}
