import { MouseEventHandler, useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import List from './components/lists/List'
import Details from './components/user/Details'
// export interface IUser {
//   id: number,
//   name: string
// }

let interval : number

function App() {
  const [users, setUser] = useState<[]>([])
  const [userID, setUserID] = useState<number>(0)
  const [usersDetails, setDetails] = useState<[]>([])

  const buttonChoice = (event : MouseEventHandler) : any => {
    setUserID(event)
    
  }
  const fetchUsers = () => {
    axios.get("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json")
    .then((response) => {
      setUser(response.data)
    })
    .catch((error : string) => {console.log(error)})
  }

const fetchUserID = (id : number) => {
  if(id != 0) {
    axios.get(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
    .then((response) => {
      setDetails(response.data)
    })
    .catch((error : string) => {console.log(error)})
  }
}
console.log(usersDetails)
  useEffect(() => {
    void fetchUsers();
    interval = setInterval(fetchUsers, 2000)
  }, [])

  useEffect(() => {
    void fetchUserID(userID)
  }, [userID])
  const usersDetailsLength = usersDetails.length != 0

  return ( 
    <div className='app'>
      <div className='list'>
        <List usersData={users} onClick={buttonChoice}/>
      </div>
      <div className='user-details'>
        {usersDetailsLength && <Details  company={usersDetails.details.company} city={usersDetails.details.city} img={usersDetails.avatar} name={usersDetails.name} position={usersDetails.details.position} key={usersDetails.id}/> }
      </div>
    </div>
  )
}

export default App


