import React, { useEffect, useState } from "react";
import axios from "axios";
import Questions from "./Questions";
import { BounceLoader } from "react-spinners";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setQuestions(response.data.results);
    setLoaded(true);
  }

  useEffect(() => {
    const apiUrl = `https://opentdb.com/api.php?amount=10&type=multiple`;
    axios.get(apiUrl).then(handleResponse);
  }, []);

  if (loaded) {
    return (
      <div className="quiz">
        <Questions questions={questions} loaded={true} />
      </div>
    );
  } else {
    return (
      <div className="loader">
        <BounceLoader color="#d76d7f" size={70} />
      </div>
    );
  }
}
