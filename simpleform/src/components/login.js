import React, { useState } from "react";
import "../App.css";

function Login() {
    //create hook for both username and password
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    //update username as typing
    const handleNameChange = event => {
        setName(event.target.value);
    };

    //update password input
    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };

    //when click Submit button, console.log
    //we'll add api later
    const handleSubmit = event => {
        event.preventDefault();
        console.log(name);
        console.log(password);
    };

    return (
        //console log allows us to see state update
        <div className="App">
            {console.log({ name })}
            {console.log({ password })}
            <form onSubmit={event => handleSubmit(event)}>
                <label>
                    Username:
          <input type="text" onChange={event => handleNameChange(event)} />
                </label>
                <label>
                    Password:
          <input type="text" onChange={event => handlePasswordChange(event)} />
                </label>
                <button>Submit!</button>
            </form>
        </div>
    );
}

export default Login;