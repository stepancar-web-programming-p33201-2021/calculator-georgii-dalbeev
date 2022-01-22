import "./index.css";

function Calc() {
  const buttons = [
    "clear",
    "←",
    "^",
    "%",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];
  return (
    <div className="calc">
      <h1 className="header">Calculator</h1>
      <div className="field">
        <input type="text" />
      </div>
      <div className="buttons">
        {buttons.map((button) => (
          <button className="button" name={button}>
            {button}
          </button>
        ))}
        <div className="rights">by George</div>
      </div>
    </div>
  );
}

export default Calc;
