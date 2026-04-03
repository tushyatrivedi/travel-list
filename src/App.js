import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

const itemArr = [
  //added date to enable sorting by insertion order, since new items will be added later in time
  { id: new Date().getTime(), text: "item1", count: 0, checked: false },
  { id: new Date().getTime() + 1, text: "item2", count: 0, checked: false },
  { id: new Date().getTime() + 2, text: "item3", count: 0, checked: false },
  { id: new Date().getTime() + 3, text: "item4", count: 0, checked: true },
];
export default function App() {
  const [items, setItems] = useState(itemArr);
  const [sort, setSort] = useState("");
  const total = items.length;
  const packed = items.filter((x) => x.checked).length;

  let sortedList = [...items]; // clone to avoid mutating state directly

  if (sort === "description") {
    // ascending alphabetical
    sortedList.sort((a, b) => a.text.localeCompare(b.text));
  } else if (sort === "input-order") {
    // descending by id (newest first)
    sortedList.sort((a, b) => b.id - a.id);
  } else if (sort === "packed-status") {
    // ascending: unchecked first, checked last
    sortedList.sort((a, b) => Number(a.checked) - Number(b.checked));
  }

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

  function handleDelete(id) {
    let list = items.filter((x) => x.id !== id);
    setItems(list);
  }

  function handleSort(sortBy) {
    //TODO add sorting by description, checked status, insert order
    setSort(sortBy);
  }

  function handleClear() {
    setItems([]);
  }

  return (
    <div className="container">
      <Logo />
      <Form onAdd={handleAddItem} />
      <PackingList
        items={sortedList}
        onChange={handleChange}
        onSort={handleSort}
        sortBy={sort}
        onClear={handleClear}
        onDelete={handleDelete}
      />
      <Stats total={total} packed={packed} />
    </div>
  );
}
