import React, { useState, useEffect, useRef, useMemo } from "react";
import Ball from "./Ball";

const getWinNumbers = () => {
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }

  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  console.log(winNumbers);
  return [...winNumbers, bonusNumber];
};

const Lotto = () => {
  const lottoNumbers = useMemo(() => getWinNumbers(), []);
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);

  const timeout = useRef([]);

  useEffect(() => {
    if (winBalls.length === 0) {
      for (let i = 0; i < winNumbers.length - 1; i++) {
        timeout.current[i] = setTimeout(() => {
          setWinBalls((prev) => [...prev, winNumbers[i]]);
        }, (i + 1) * 1000);
      }
      timeout.current[6] = setTimeout(() => {
        setBonus(winNumbers[6]);
        setRedo(true);
      }, 7000);
    }
    return () => {
      timeout.current.forEach((v) => {
        clearTimeout(v);
      });
    };
  }, [timeout.current]);

  const onClickRedo = () => {
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeout.current = [];
  };

  return (
    <>
      <div>당첨숫자</div>
      <div id="결과창">
        {winBalls.map((v) => (
          <Ball key={v} number={v} />
        ))}
      </div>
      <div>보너스</div>
      {bonus && <Ball number={bonus} />}
      {redo && <button onClick={onClickRedo}>한번 더</button>}
    </>
  );
};

export default Lotto;
