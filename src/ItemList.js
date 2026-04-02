import { Item } from "./Item";

export function ItemList({ items, onChange }) {
  let list = items.map((x) => (
    <Item key={x.text} onChange={onChange} item={x} />
  ));
  return <div className="items">{list}</div>;
}
