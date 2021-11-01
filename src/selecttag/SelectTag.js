import { nanoid } from "nanoid";
import { useState } from "react";

export default function SelectTag() {

    const [numbers, setNumbers] = useState([]);
    const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(numbers)

    function handleSubmit(e) {
        e.preventDefault();
        setNumbers([]);
    }


    function handleNumberChange(e){
        const selectedNumber = e.target.value;
        const newNumbers = [...numbers, selectedNumber];
        setNumbers(newNumbers);
        
    }
    

    return(
        <div>
            <select 
                // onChange={handleNumberChange}
                value={numbers}
            >
                {numberArray.map(number => (
                    <option
                        key={number}
                        value={number}
                        
                    >{number}</option>
                ))}
            </select>
            <button onClic={() => setNumbers([...numbers, {id: nanoid()}])}>Add Number</button>
            <p>{numbers}</p>
        </div>
    )
}