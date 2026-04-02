import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

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

  function handleSort() {
    //TODO add sorting by description, checked status, insert order
  }

  return (
    <div className="container">
      <Logo />
      <Form onAdd={handleAddItem} />
      <PackingList items={items} onChange={handleChange} onSort={handleSort} />
      <Stats total={total} packed={packed} />
    </div>
  );
}
