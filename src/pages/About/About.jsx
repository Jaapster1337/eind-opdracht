import "./About.css"
import {Hr} from "../../components/hr/hr.jsx";
import {getGenres} from "../../helpers/getGenres.js";
import {useEffect, useState} from "react";

export function About() {

    return (
        <div className="about-wrapper">
            <h1>Game Recommendation Engine </h1>
            <Hr classname="custom-hr"/>
            <p>
                Yes, indeed. the struggle to find the perfect game amidst the vast ocean of options is a shared
                experience
                among gamers. Despite the countless hours spent sifting through Steam recommendations, browsing queues,
                and scouring websites, the elusive answer to the question of "What to play next?" often remains out of
                reach. It's a journey filled with anticipation and frustration, where each new suggestion holds the
                promise of excitement yet often falls short of capturing our interest. But fear not, for in this age of
                boundless digital entertainment, a solution beckons on the horizon.
            </p>
            <p>This website endeavors to help you, the gamer, weed through the masses of games and hopefully point you
                toward your next adventure. Give it a try and maybe your next rabbithole is just around the corner</p>
        </div>
    );
}