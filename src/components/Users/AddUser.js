import React, {useState} from "react";
import "./AddUser.css";
import Card from "../UI/Card";
import "./AddUser.css"
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

    const changeUserName = (event) => {
        setEnteredUserName(event.target.value);
    }
    const changeAge = (event) => {
        setEnteredAge(event.target.value);
    }
    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please Enter Valid Name and Age"
            })
            return;
        }
        if (+enteredAge < 0) {
            setError({
                title: "Invalid input",
                message: "Please Enter > 0"
            })
            return;
        }
        props.onAddUser(enteredUserName, enteredAge);
        setEnteredUserName("");
        setEnteredAge("");
    }
    const errorHandler = () => {
        setError(null);
    }
    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className="input">
                <form onSubmit={addUserHandler}>
                    <label htmlFor="userName">User Name</label>
                    <input type="text" id="userName" value={enteredUserName} onChange={changeUserName}/>
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" value={enteredAge} onChange={changeAge}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    );
};
export default AddUser;