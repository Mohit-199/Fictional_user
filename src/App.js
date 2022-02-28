import React, {useState} from 'react';
import UserList from './components/UserList/UserList';
import AddUser from './components/Users/AddUser';

function App() {
  const [listofUsers, setlist] = useState([]);
  const addUserList = (newUser) =>{
    setlist((prevUser) =>{
      return [...prevUser, newUser]
    });
  }
  return (
    <div>
      <AddUser onAddUser={addUserList} />
      <UserList  newList={listofUsers}/>
    </div>
  );
}

export default App;
