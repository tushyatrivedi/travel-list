import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";

const itemArr = [
  { id: crypto.randomUUID(), text: "item1", count: 0, checked: false },
  { id: crypto.randomUUID(), text: "item2", count: 0, checked: false },
  { id: crypto.randomUUID(), text: "item3", count: 0, checked: false },
  { id: crypto.randomUUID(), text: "item4", count: 0, checked: true },
];
export default function App() {
  const [items, setItems] = useState(itemArr);
  const total = items.length;
  const packed = items.filter((x) => x.checked).length;

  function handleAddItem(item) {
    setItems([...items, { ...item, id: crypto.randomUUID() }]);
  }

  function handleChange(item) {
    let list = items.map((x) => {
      if (x.id === item.id) return item;
      else {
        return x;
      }
    });
    setItems(list);
  }

  return (
    <div className="container">
      <Logo />
      <Form onAdd={handleAddItem} />
      <PackingList items={items} onChange={handleChange} />
      <Stats total={total} packed={packed} />
    </div>
  );
}

function Logo() {
  return <div className="logo">Far Away</div>;
}

function Form({ onAdd }) {
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

function PackingList({ items, onChange }) {
  return (
    <div className="packing-list">
      <ItemList items={items} onChange={onChange} />
      <ListFunctions />
    </div>
  );
}

function ListFunctions() {
  return (
    <div className="list-functions">
      <select name="functions">
        <option value="description"> Sort by description</option>
        <option value="input-order"> Sort by input order</option>
        <option value="packed-status">Sort by packed status </option>
      </select>
      <button>Clear List</button>
    </div>
  );
}

function ItemList({ items, onChange }) {
  let list = items.map((x) => (
    <Item key={x.text} onChange={onChange} item={x} />
  ));
  return <div className="items">{list}</div>;
}

function Item({ item, onChange }) {
  return (
    <div className="item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={(e) => {
          onChange({ ...item, checked: e.target.checked });
        }}
      />
      <p>{` ${item.count} ${item.text}`}</p>
      {item.checked ? (
        <FaCheck className="check" />
      ) : (
        <ImCross className="cross" />
      )}
    </div>
  );
}

function Stats({ total, packed }) {
  return (
    <div className="stats">
      <p>
        You have {total} items in your list, you already packed {packed}
      </p>
    </div>
  );
}
