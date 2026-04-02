import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

const itemArr = [
  //added date to enable sorting by insertion order, since new items will be added later in time
  { id: new Date().getTime(), text: "item1", count: 0, checked: false },
  { id: new Date().getTime(), text: "item2", count: 0, checked: false },
  { id: new Date().getTime(), text: "item3", count: 0, checked: false },
  { id: new Date().getTime(), text: "item4", count: 0, checked: true },
];
export default function App() {
  const [items, setItems] = useState(itemArr);
  const total = items.length;
  const packed = items.filter((x) => x.checked).length;

  function handleAddItem(item) {
    setItems([...items, { ...item, id: new Date().getTime() }]);
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

  function handleSort(sortBy) {
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
