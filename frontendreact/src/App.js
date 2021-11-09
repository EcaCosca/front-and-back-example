import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState({ user: 'Jhonny' })
  const [users, setUsers] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3001/users')
    .then((res) => {
      console.log(res.data)
      setUsers(res.data)
    })
  }, [])

  const handleClick = () => {
    axios.post('http://localhost:3001/users', user)
    .then((res) => {
      console.log(res.data)
      setUsers([...users, res.data])
    })
  }

  return (
    <div className="App">
      <header className="App-header">

      {
        users.map((user)=>{
          return <li>User: {user.user} ID: {user.id}</li>
        })
      }


      <button onClick={handleClick}>POST</button>
        
      </header>
    </div>
  );
}

export default App;
