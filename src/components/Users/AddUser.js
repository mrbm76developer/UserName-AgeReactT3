import React, {Fragment, useRef, useState} from "react";
import "./AddUser.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const name = useRef();
    const age = useRef();

    const [error, setError] = useState();


    const addUserHandler = (event) => {
        const userName=name.current.value;
        const userAge=age.current.value;
        event.preventDefault();
        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please Enter Valid Name and Age"
            })
            return;
        }
        if (+userAge < 0) {
            setError({
                title: "Invalid input",
                message: "Please Enter > 0"
            })
            return;
        }
        props.onAddUser(userName, userAge);
        name.current.value = "";
        age.current.value = "";
    }
    const errorHandler = () => {
        setError(null);
    }
    return (
        <Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className="input">
                <form onSubmit={addUserHandler}>
                    <label htmlFor="userName">User Name</label>
                    <input type="text" id="userName" ref={name}/>
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" ref={age}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Fragment>
    );
};
export default AddUser;