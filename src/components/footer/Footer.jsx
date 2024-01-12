import './Footer.css'
export function Footer({text}){
    return(
        <>
            <footer className="dynamic-height">
                <p>{text}</p>
            </footer>
        </>
    )
}