import {useState} from "react";
import './Dropdown.css'

export function Dropdown({name, labelText, optionsArray, selectedValue, setSelectedValue}) {
    // const [selectedValue, setSelectedValue] = useState('')
    const handleSelect = (e) => {
        setSelectedValue(name, e.target.value)
    }

    return (
        <div>
            <label htmlFor={name} className="dropdown-label">{labelText}</label>
            <select id={name} value={selectedValue} onChange={handleSelect}>
                {optionsArray.map((option, index) => (<option key={index} value={option}>{option}</option> ))}
            </select>
        </div>
    );
}