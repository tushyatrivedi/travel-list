import { Item } from "./Item";

export function ItemList({ items, onChange }) {
  let list = items.map((x) => <Item key={x.id} onChange={onChange} item={x} />);
  return <div className="items">{list}</div>;
}
