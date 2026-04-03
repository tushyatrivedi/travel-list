export function ListFunctions({ onSort, sortBy, onClear }) {
  return (
    <div className="list-functions">
      <select
        name="functions"
        onChange={(e) => {
          onSort(e.target.value);
        }}
        value={sortBy}
      >
        <option value="description"> Sort by description</option>
        <option value="input-order"> Sort by input order</option>
        <option value="packed-status">Sort by packed status </option>
      </select>
      <button onClick={onClear}>Clear List</button>
    </div>
  );
}
