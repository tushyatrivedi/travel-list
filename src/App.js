import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const itemArr = [
  { text: "item1", count: 0, checked: false },
  { text: "item2", count: 0, checked: false },
  { text: "item3", count: 0, checked: false },
  { text: "item4", count: 0, checked: false },
];
export default function App() {
  return (
    <div className="container">
      <Logo />
      <Form />
      <PackingList items={itemArr} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <div className="logo">Far Away</div>;
}

function Form() {
  let optionItems = Array(20)
    .fill(0)
    .map((x, index) => index + 1);

  return (
    <div className="form">
      <p>What do you need for the trip?</p>
      <select name="items">
        {optionItems.map((x) => {
          return <option value={x}>{x}</option>;
        })}
      </select>
      <input type="text" value={""} placeholder="item name" />
      <button>Add</button>
    </div>
  );
}

function PackingList({ items }) {
  return (
    <div className="packing-list">
      <ItemList items={items} />
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

function ItemList({ items }) {
  let list = items.map((x) => <Item item={x} />);
  return <div className="items">{list}</div>;
}

function Item({ item }) {
  return (
    <div className="item">
      <input type="checkbox" value={item.checked} />
      <p>{item.text}</p>
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
        You have {total} items in your list, you already packed {packed}{" "}
        {`(${(packed / total) * 100})`}
      </p>
    </div>
  );
}
