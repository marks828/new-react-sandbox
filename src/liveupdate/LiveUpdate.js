import { useState } from "react";

export default function LiveUpdate() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    function handleFirstNameChange(event) {
        setFirstName(event.target.value);
        setFullName(event.target.value + ' ' + lastName);
    }

    function  handleLastNameChange(event) {
        setLastName(event.target.value);
        setFullName(firstName + ' ' + event.target.value);
    }

    return(
        <div>
            <p>First Name</p>
            <input 
                type="text" 
                value={firstName}
                onChange={handleFirstNameChange}
            />
            <p>Last Name</p>
            <input 
                type="text" 
                value={lastName}
                onChange={handleLastNameChange}
            />

            <p>Your full name is: {fullName}</p>
        </div>
    )

}