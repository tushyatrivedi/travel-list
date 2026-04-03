import { ItemList } from "./ItemList";
import { ListFunctions } from "./ListFunctions";

export function PackingList({ items, onChange, onSort, onClear }) {
  return (
    <div className="packing-list">
      <ItemList items={items} onChange={onChange} />
      <ListFunctions onSort={onSort} onClear={onClear} />
    </div>
  );
}
