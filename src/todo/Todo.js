import React, { useState } from "react";
// import classNames from "classnames";
import styles from "./Todo.module.css";

export default function Todo() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  function checkValue(e) {
    setValue(e.target.value);
  }

  function addDodoList() {
    setData([...data, { value: value, id: Date.now() }]);
    setValue("");
  }

  const onSelectHendler = (id) => {
    console.log("clicked", id);
    setIsSelected(!isSelected);
  };

  const deletHendler = (id) => {
    console.log("deleted", id);
    const newData = data.filter((text) => text.id !== id);
    setData(newData);
  };

  return (
    <div className={styles.todoProgram}>
      <div className={styles.todoMain}>
        <input
          value={value}
          type="text"
          placeholder="todo..."
          onChange={checkValue}
        />
        <button onClick={addDodoList}>click</button>
        <div className>
          {data.map((d) => (
            <p
              style={
                isSelected === false
                  ? { textDecoration: "none" }
                  : { textDecoration: "line-through" }
              }
              // className={classNames("todo", {
              //   "todo-selected": isSelected,
              // })}
              key={d.id}
            >
              {d.value}
              <span
                onClick={() => onSelectHendler(d.id)}
                className={styles.done}
              >
                ✅
              </span>

              <span
                onClick={() => deletHendler(d.id)}
                className={styles.delete}
              >
                ❌
              </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
