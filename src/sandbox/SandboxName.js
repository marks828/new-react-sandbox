import { useState } from 'react';

export default function SandboxName(props) {
    
    const [newFirstName, setNewFirstName] = useState('')
    const [newLastName, setNewLastName] = useState('')

    return(
    <>
        {props.name.isEditing ?
        <div>
            <input 
                type="text"
                value={newFirstName}
                placeholder={props.name.firstName} 
                onChange={(e) => setNewFirstName(e.target.value)}
            />
            <input 
                type="text"
                value={newLastName}
                placeholder={props.name.lastName} 
                onChange={(e) => setNewLastName(e.target.value)}
            />
            {/* delete name button */}
            <button onClick={() => props.updateName(props.name.id, {newFirstName, newLastName} )}>Save</button>
            <button onClick={() => props.isEditingName(props.name.id)} >Cancel</button>
        </div>

        :
        
        <div>
        <p id={props.name.id}>{props.name.firstName}</p>
        <p id={props.name.id}>{props.name.lastName}</p>
        {/* delete name button */}
        <button onClick={() => props.isEditingName(props.name.id)}>Edit</button>
        <button onClick={() => props.deleteName(props.name.id)}>Delete</button>
        </div>

    }
    </>
    )
}