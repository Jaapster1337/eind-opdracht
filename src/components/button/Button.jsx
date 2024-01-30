import './Button.css';
import {useNavigate} from "react-router-dom";
export function Button({type, title, goto}) {

    const navigate = useNavigate()

    function handleClick(){
        navigate(goto)
    }

    return (
        <>
            <button type={type} onClick={handleClick}>{title}</button>
        </>
    );
}

