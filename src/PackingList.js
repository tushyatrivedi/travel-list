import { ItemList } from "./ItemList";
import { ListFunctions } from "./ListFunctions";

export function PackingList({ items, onChange, onSort, onClear, onDelete }) {
  return (
    <div className="packing-list">
      <ItemList items={items} onChange={onChange} onDelete={onDelete} />
      <ListFunctions onSort={onSort} onClear={onClear} />
    </div>
  );
}
