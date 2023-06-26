import React from "react";

export default function Question({ answers, index, question }) {
  return (
    <div key={index}>
      <h2>
        {index + 1}. {""}
        {question.question}
      </h2>
      <ul>
        {answers.map((answer, index) => {
          return <li kay={index}>{answer}</li>;
        })}
      </ul>
    </div>
  );
}
