const React = require("react");

const GuGuDan = () => {
  const ref = React.useRef(null);
  const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = React.useState("");
  const [result, setResult] = React.useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult(first + " x " + second + " = " + value + " : 정답");
      setValue("");
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      ref.current.focus();
    } else {
      setResult("오답");
      setValue("");
      ref.current.focus();
    }
  };

  return (
    <>
      <div>
        {first} 곱하기 {second} 는 ?
      </div>
      <form onSubmit={onSubmit}>
        <input ref={ref} type="text" onChange={onChange} value={value} />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = GuGuDan;
