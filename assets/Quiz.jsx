import React, { useState } from "react";
import "./Quiz.css";

function Quiz({ questions }) {
  const [index, setindex] = useState(0);
  const [classstate, setclass] = useState(null);
  const [lock, setlock] = useState(false);
  const [score, setscore] = useState(0);

  const idxinc = () => {
    if (lock) {
      setindex(index + 1);
      setclass(null);
      setlock(false);
    }
  };
  const checkans = (op) => {
    if (lock != true) {
      setclass(op);
      setlock(true);

      if (questions[index].correctAnswer == op) {
        setscore(score + 1);
      }
    }
  };
  const restart = () => {
    setindex(0);
    setclass(null);
    setlock(false);
    setscore(0);
  };
  return (
    <div className="Container">
      <h1>Quiz App</h1>
      <hr />
      {index === questions.length ? (
        <>
          <h2>Quiz Completed 🎉</h2>
          <h2>
            Your total Score is{" "}
            <span className={score < questions.length * 0.8 ? "red" : "green"}>
              {score}{" "}
            </span>
            out of {questions.length}
          </h2>
          <button onClick={restart}>Restart</button>
          {score < questions.length * 0.8 ? (
            <>
              <h1 className="size">🖕</h1>
              <h4>*You have need to study more and more</h4>
            </>
          ) : (
            <>
              <h1 className="size">👍</h1>
              <h4>*Well Done</h4>
            </>
          )}
        </>
      ) : (
        <>
          <h2>{questions[index].question}</h2>
          <ul>
            <li
              onClick={(e) => checkans(0)}
              className={
                classstate == 0
                  ? questions[index].correctAnswer === 0
                    ? "correct"
                    : "wrong"
                  : ""
              }
            >
              {questions[index].options[0]}
            </li>
            <li
              onClick={(e) => checkans(1)}
              className={
                classstate == 1
                  ? questions[index].correctAnswer === 1
                    ? "correct"
                    : "wrong"
                  : ""
              }
            >
              {questions[index].options[1]}
            </li>
            <li
              onClick={(e) => checkans(2)}
              className={
                classstate == 2
                  ? questions[index].correctAnswer === 2
                    ? "correct"
                    : "wrong"
                  : ""
              }
            >
              {questions[index].options[2]}
            </li>
            <li
              onClick={(e) => checkans(3)}
              className={
                classstate == 3
                  ? questions[index].correctAnswer === 3
                    ? "correct"
                    : "wrong"
                  : ""
              }
            >
              {questions[index].options[3]}
            </li>
          </ul>
          <button onClick={idxinc}>Next</button>
          <br></br>
          <div className="index">
            {index + 1} of {questions.length} question
          </div>
        </>
      )}
    </div>
  );
}
export default Quiz;
