const React = require("react");
const { useRef, useState, useEffect } = React;

const numberBaseball = () => {
  const inputRef = useRef();
  const [value, setValue] = useState("");
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [random4N, setRandom4N] = useState(0);

  const ran1 = Math.ceil(Math.random() * 9);
  const ran2 = Math.ceil(Math.random() * 9);
  const ran3 = Math.ceil(Math.random() * 9);
  const ran4 = Math.ceil(Math.random() * 9);

  useEffect(() => {
    setRandom4N("" + ran1 + ran2 + ran3 + ran4);
  }, []);

  console.log(random4N);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = () => {};

  return (
    <>
      <h1>
        {numberA}스트라이크 {numberB}볼
      </h1>
      <form onSubmit={onSubmit}>
        <input
          placeholder="숫자 4개를 적어주세요"
          ref={inputRef}
          value={value}
          onChange={onChange}
        />
        <button>확인</button>
      </form>
    </>
  );
};

module.exports = numberBaseball;
