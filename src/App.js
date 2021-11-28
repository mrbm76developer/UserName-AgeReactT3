import React, {Fragment, useState} from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";


const App = () => {
    const [userList, setUserList] = useState([]);
    const addUserHandler = (uName, uAge) => {
        setUserList(preUserList => {
            return [...preUserList,
                {
                    id: Math.random().toString(),
                    name: uName,
                    age: uAge
                }]
        })

    }
    return (
        <Fragment className="App">
            <AddUser onAddUser={addUserHandler}/>
            <UserList users={userList}/>
        </Fragment>
    );
}

export default App;
