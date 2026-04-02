import { useState } from "react";

export function Form({ onAdd }) {
  const [data, setData] = useState({ text: "", count: 1, checked: false });
  let optionItems = Array(20)
    .fill(0)
    .map((x, index) => index + 1);

  return (
    <div className="form">
      <p>What do you need for the trip?</p>
      <select
        name="items"
        onChange={(e) => {
          setData({ ...data, count: Number(e.target.value) });
        }}
      >
        {optionItems.map((x) => {
          return (
            <option key={x} value={x}>
              {x}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        value={data.text}
        onChange={(e) => {
          setData({ ...data, text: e.target.value });
        }}
        placeholder="item name"
      />
      <button onClick={() => onAdd(data)}>Add</button>
    </div>
  );
}
