import React , {useState} from 'react';
import Card from '../UI/Card';
import classes from "./AddUser.module.css";
import Button from '../UI/Button';
import ErrorModale from "../UI/ErrorModale";

const AddUser = (props) =>{

    const [userName, setUserName] = useState("");
    const [userAge, setUserAge] = useState("");
    const [error, setError] = useState();
    const addUserName = (event) =>{
        setUserName(event.target.value);
    }
    const addUserAge = (event) =>{
        setUserAge(event.target.value);
    }
    const addUserHandler = (event) =>{
        event.preventDefault();
        if(userName.trim().length===0){
            setError({
                title : "Invalid Input",
                message : "Please enter a valid input"
            })
            return;
        }
        if(userAge.trim().length===0 || +userAge < 0){
            setError({
                title : "Invalid Age",
                message : "Please enter a valid Age(>0)"
            })
            return;
        }
        const userDetails = {
            id : Math.random().toString(),
            name : userName,
            age : userAge
        }
        props.onAddUser(userDetails);
        
    }

    const errorHandler = ()=>{
        setError(null);
    }
    return (
        <div>
            {error && <ErrorModale title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                        <label>Username</label>
                        <input type="text" onChange={addUserName}/>
                        <label>Age</label>
                        <input type="number" onChange={addUserAge}/>
                        <Button type="submit">Add user</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;
