export function Stats({ total, packed }) {
  return (
    <div className="stats">
      <p>
        You have {total} items in your list, you already packed {packed}
      </p>
    </div>
  );
}
