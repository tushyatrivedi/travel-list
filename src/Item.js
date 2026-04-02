import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export function Item({ item, onChange }) {
  return (
    <div className="item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={(e) => {
          onChange({ ...item, checked: e.target.checked });
        }}
      />
      <p>{` ${item.count} ${item.text}`}</p>
      {item.checked ? (
        <FaCheck className="check" />
      ) : (
        <ImCross className="cross" />
      )}
    </div>
  );
}
