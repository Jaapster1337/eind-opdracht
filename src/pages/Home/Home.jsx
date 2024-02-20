import './Home.css'
import {Hr} from "../../components/hr/hr.jsx";

export function Home() {
    return (
        <>
            <div className="outer-container">
                <div className="page-container">
                    <h1>The Games Recommendation Engine</h1>
                    <Hr classname="custom-hr"/>
                    <p>Looking for something to play but can't think of anything? Wondering what's out there? Or just wanna waste some time looking at my site?</p>
                    <h3>Try it out!!</h3>
                    <section className="homepage-text">
                        <p>Save played games or find new favorites. All you can find on GameRecommendationEngine!
                            Search by genre and console and you will get a list of 10 psuedo-randomized games!</p>

                        <p>If i may suggest, these are some of my favorites:</p>
                        <ul>
                            <li><p>1: The Dark Souls games (or anything by FromSoftware)</p></li>
                            <li><p>2: Slay the Spire</p></li>
                            <li><p>3: Fallout: New Vegas</p></li>
                            <li><p>4: Metro 2033</p></li>
                            <li><p></p></li>
                        </ul>
                    </section>
                </div>
            </div>
        </>
    )
}