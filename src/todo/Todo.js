import React, { useState } from "react";

export default function Todo() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  function checkValue(e) {
    setValue(e.target.value);
  }

  function addDodoList() {
    setData([...data, value]);
    setValue("");
  }

  return (
    <div>
      <input
        value={value}
        type="text"
        placeholder="todo..."
        onChange={checkValue}
      />
      <button onClick={addDodoList}>click</button>
      <div>
        {data &&
          data.map((d, i) => (
            <p key={i}>
              {d}
              <span>✅</span>
              <span>❌</span>
            </p>
          ))}
      </div>
    </div>
  );
}
