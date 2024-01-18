import { MouseEventHandler } from "react";

interface Items {
  id: number,
  name: string,
  onClick: MouseEventHandler
}
const Items = ({id, name, onClick} : Items) => {
  return (
      <li key={id} className="item-list">
        <button className="btn" onClick={() => onClick(id)}>{name}</button>
      </li>)
}

export default Items;