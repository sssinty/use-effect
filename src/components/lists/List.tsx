import Items from "./Items";
import { IUser } from "../../App";
import { MouseEventHandler } from "react";
interface IList {
  usersData: IUser[],
  onClick: MouseEventHandler
}

const List = ({usersData, onClick} : IList)  => {
  return (
    <>
    <div className="list-block">
      <ul className="list-users">
        {usersData.map((user) => {
          return <Items key={user.id} id={user.id} name={user.name} onClick={onClick}/>
        })}
      </ul>
    </div>
  </>
  )
} 

export default List;