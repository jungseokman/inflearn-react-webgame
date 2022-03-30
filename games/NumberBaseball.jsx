import React, { useState, useMemo, useCallback, useRef } from "react";
import Try from "./Try";

const getNumbers = () => {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
};

const NumberBaseball = () => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const [tries, setTries] = useState([]);
  const [answer, setAnswer] = useState(getNumbers());

  const ref = useRef();

  const onChangeInput = useCallback((e) => {
    setValue(e.target.value);
  });

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if (value === answer.join("")) {
      setResult("홈런");
      setTries((prevState) => {
        return [...prevState, { try: value, result: "홈런" }];
      });
      alert("게임을 다시 시작합니다");
      setValue("");
      setAnswer(getNumbers());
      setTries([]);
      ref.current.focus();
    } else {
      const answerArray = value.split("").map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`10번 넘게 틀려서 실패! 답은  ${answer.join(",")}였습니다!`);

        alert("게임을 다시 시작합니다");
        setValue("");
        setAnswer(getNumbers());
        setTries([]);
        ref.current.focus();
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        setTries((prevTries) => {
          return [
            ...prevTries,
            {
              try: value,
              result: `${strike}스크라이크, ${ball}볼`,
            },
          ];
        });
        setValue("");
      }
    }
  });

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmit}>
        <input ref={ref} maxLength={4} value={value} onChange={onChangeInput} />
        <button>확인</button>
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((v, i) => {
          return <Try key={`${i + 1}차 시도 :`} tryInfo={v} />;
        })}
      </ul>
    </>
  );
};

export default NumberBaseball;
