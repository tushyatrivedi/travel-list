export function ListFunctions({ onSort }) {
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
