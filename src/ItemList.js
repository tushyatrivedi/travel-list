import { Item } from "./Item";

export function ItemList({ items, onChange, onDelete }) {
  let list = items.map((x) => (
    <Item key={x.id} onChange={onChange} onDelete={onDelete} item={x} />
  ));
  return <div className="items">{list}</div>;
}
