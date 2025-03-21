import React, { useState } from "react";
import "../style/Calculator.css";

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleOperation = (operation) => {
    const value = parseFloat(input);
    if (isNaN(value)) return;

    switch (operation) {
      case "add":
        setResult((prev) => prev + value);
        break;
      case "subtract":
        setResult((prev) => prev - value);
        break;
      case "multiply":
        setResult((prev) => prev * value);
        break;
      case "divide":
        if (value !== 0) {
          setResult((prev) => prev / value);
        } else {
          alert("Cannot");
        }
        break;
      default:
        break;
    }

    setInput("");
  };

  const resetInput = () => setInput("");
  const resetResult = () => setResult(0);

  return (
    <div className="calculator">
      <h2>Simple Calculator</h2>
      <div className="result">Result: {result}</div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter a number"
      />
      <div className="buttons">
        <button onClick={() => handleOperation("add")} className="blue">Add</button>
        <button onClick={() => handleOperation("subtract")} className="blue">Subtract</button>
        <button onClick={() => handleOperation("multiply")} className="blue">Multiply</button>
        <button onClick={() => handleOperation("divide")} className="blue">Divide</button>
        <button onClick={resetInput} className="light-blue">Reset Input</button>
        <button onClick={resetResult} className="red">Reset Result</button>
      </div>
    </div>
  );
};

export default Calculator;
