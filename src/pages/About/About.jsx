import "./About.css"
import {Hr} from "../../components/hr/hr.jsx";
import {getGenres} from "../../helpers/getGenres.js";
export function About() {
    return (
        <div className="about-wrapper">
            <h1>Game Recommendation Engine </h1>
            <Hr classname="custom-hr"/>
            <p>Dit is mijn eindopdracht voor frontend 08/2023</p>
            <p>Als gamers hebben we allemaal wel eens het probleem gehad dat we niet weten wat we willen spelen.</p>
            <button type="button" onClick={getGenres}>Get genres</button>
        </div>
    );
}