import './Button.css';
export function Button({type, title}) {
    return (
        <>
            <button type={type}>{title}</button>
        </>
    );
}