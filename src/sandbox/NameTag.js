export default function NameTag(props) {
    
    return(
    <>
        {props.name.isEditing ?
        <div>
        <p id={props.name.id}>{props.name.name}</p>
        {/* delete name button */}
        <button onClick={() => props.isEditingName(props.name.id)}>Save</button>
        <button onClick={() => props.deleteName(props.name.id)}>Cancel</button>
        </div>

        :
        
        <div>
        <p id={props.name.id}>{props.name.name}</p>
        {/* delete name button */}
        <button onClick={() => props.isEditingName(props.name.id)}>Edit</button>
        <button onClick={() => props.deleteName(props.name.id)}>Delete</button>
        </div>

    }
    </>
    )
}