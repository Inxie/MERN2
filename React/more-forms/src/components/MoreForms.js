import React, { useState } from  'react';
    
    
const MoreForms = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
    };

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2) {
            setFirstNameError("First name must be at least 2 characters!");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2) {
            setLastNameError("Last name must be at least 2 characters!");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters!");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters!");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length < 8) {
            setConfirmPasswordError("Confirm Password must be at least 8 characters!");
        }
        else if (e.target.value != setPassword) {
            setConfirmPasswordError("Confirm Password must match Password!")
        }
    }
    
    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ handleFirstName } />
                    {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                    }
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ handleLastName } />
                    {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                    }
                </div>
                <div>
                    <label>Email: </label> 
                    <input type="text" onChange={ handleEmail } />
                    {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ handlePassword } />
                    {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ handleConfirmPassword } />
                    {
                    confirmPasswordError ?
                    <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                    ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
            <hr />
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
    );
};
    
export default MoreForms;