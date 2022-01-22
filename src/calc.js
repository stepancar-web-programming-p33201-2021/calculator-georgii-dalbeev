import "./index.css";
import { buttons } from "./services";
import { isValidElement, useState } from "react";

function Calc() {
  const [value, setValue] = useState("");
  const [lvalue, setLvalue] = useState("");
  const [op, setOp] = useState("");

  function handleClick(event) {
    const eventValue = event.target.name;
    if (eventValue.match(/[0-9]/)) {
      setValue(value + eventValue);
    } else if (eventValue === "clear") {
      setValue("");
      setOp("");
      setLvalue("");
    } else if (eventValue === "←") {
      setValue(value.slice(0, -1));
    } else if (eventValue === ".") {
      if (!value.match(/\./) && value !== "") {
        setValue(value + eventValue);
      }
    } else if (eventValue === "=") {
      if(!value.match(/^.*\.$/) && value !== "") {
        switch (op){
          case "+": setValue((parseFloat(lvalue) + parseFloat(value)).toString());break;
          case "-": setValue((parseFloat(lvalue) - parseFloat(value)).toString());break;
          case "*": setValue((parseFloat(lvalue) * parseFloat(value)).toString());break;
          case "%": setValue((parseFloat(lvalue) % parseFloat(value)).toString());break;
          case "^": setValue((Math.pow(parseFloat(lvalue), parseFloat(value))).toString());break;
        }
        setOp("");
        setLvalue("");
      }
    } else {
      if(!value.match(/^.*\.$/)) {
        if (op === "" && value !== "") {
          setLvalue(value);
          setValue("");
        }
        setOp(eventValue);
      }
    }
  }

  function onChangeInput(event) {}

  return (
    <div className="calc">
      <h1 className="header">Calculator</h1>
      <div className="field">
        <input type="text" value={value} onChange={onChangeInput} />
      </div>
      <div className="buttons">
        {buttons.map((button) => (
          <button
            key={button}
            className="button"
            onClick={handleClick}
            name={button}
          >
            {button}
          </button>
        ))}
        <div className="rights">by George</div>
      </div>
      <div className="operation">{op}</div>
    </div>
  );
}

export default Calc;
