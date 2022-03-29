import React, { useState, useEffect, useRef } from "react";

const RSP = () => {
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [imgCoord, setImgCoord] = useState(0);

  const interval = useRef();

  const rspCoords = {
    바위: 0,
    가위: "-142px",
    보: "-284px",
  };

  const scores = {
    바위: 0,
    가위: 1,
    보: -1,
  };

  const computerChoice = (imgCoord) => {
    console.log(
      Object.entries(rspCoords).find((v) => {
        console.log(v[1] === imgCoord);
        return v[1] === imgCoord;
      })
    );
    return Object.entries(rspCoords).find((v) => {
      console.log(v[1] === imgCoord);
      return v[1] === imgCoord;
    })[0];
  };

  useEffect(() => {
    interval.current = setInterval(() => {
      if (imgCoord === rspCoords.바위) {
        setImgCoord(rspCoords.가위);
        clearInterval(interval.current);
      } else if (imgCoord === rspCoords.가위) {
        setImgCoord(rspCoords.보);
        clearInterval(interval.current);
      } else if (imgCoord === rspCoords.보) {
        setImgCoord(rspCoords.바위);
        clearInterval(interval.current);
      }
    }, 1000);
  }, [imgCoord]);

  const onClickBtn = (choice) => {
    clearInterval(interval.current);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      setResult("비겼습니다");
    } else if ([-1, 2].includes(diff)) {
      setResult("이겼습니다");
      setScore((prev) => prev + 1);
    } else {
      setResult("졌습니다");
      setScore((prev) => prev - 1);
    }
    setTimeout(() => {
      setImgCoord(0);
    }, 2000);
  };

  return (
    <>
      <div
        id="computer"
        style={{
          background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
        }}
      ></div>
      <div>
        <button id="rock" className="btn" onClick={() => onClickBtn("바위")}>
          바위
        </button>
        <button id="scissor" className="btn" onClick={() => onClickBtn("가위")}>
          가위
        </button>
        <button id="paper" className="btn" onClick={() => onClickBtn("보")}>
          보
        </button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
    </>
  );
};

export default RSP;
