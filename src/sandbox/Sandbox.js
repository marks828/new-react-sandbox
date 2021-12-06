import { useState } from "react"
import { SandboxData } from "./SandboxData"
import SandboxName from "./SandboxName"
import { nanoid } from "nanoid"
export default function Sandbox() {
    
    const [names, setNames] = useState(SandboxData)
    const [newNameInput, setNewNameInput] = useState('')


    function deleteName(id){
        const deleteName = names.filter(name => name.id !== id)
        setNames(deleteName)
    }

    function isEditingName(id, editedName){
        const editName = names.map(name => {
            //check if name's id is the same as the one we are editing
            if(id === name.id){
                return {...name, isEditing: !name.isEditing}
            }
            return name
        })
        // console.log(editName)
        return setNames(editName)
    }

    function updateName(id, newName){
        const updateName = names.map(name => {
            if(id === name.id){
                return {...name, name: newName, isEditing: !name.isEditing}
            }
            return name
        })
        return setNames(updateName)
    }
    console.log(names)

    return (
        <div>
            {/* static p tag */}
            {/* <p id={SandboxData[0].id}>{SandboxData[0].name}</p> */}

            {/* dynamic p tag mapping out SandboxData */}
            {names.map((name) => (
                <>
                    <SandboxName 
                        names = {names}
                        name = {name}
                        deleteName = {deleteName}
                        isEditingName = {isEditingName}
                        updateName = {updateName}
                    />
                    
                </>

            ))}
            
            <div>
            <input 
                type="text" 
                value={newNameInput}
                onChange={(e) => setNewNameInput(e.target.value)}
            />
            <button 
                type="submit"
                onClick={() => {
                    setNames([...names, {id:nanoid(), name: newNameInput}])}
                }
            >
                Add Name</button>
            </div>

        </div>
    )


}