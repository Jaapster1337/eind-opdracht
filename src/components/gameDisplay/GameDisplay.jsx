import React from 'react';
import './GameDisplay.css'
import userImage from "../../assets/generic-user-image.png";
import {Link} from "react-router-dom";

export function GameDisplay({index, id, img, name, platforms, date, genres}) {
    return (
        <section id={index} className="game-card">
            <div className="game-image-container">
                <Link to={`/GameDetails/${id}`}>
                <img src={img} className="game-image" alt="art of the game"/>
                </Link>
            </div>
            <div className="text-wrapper">
                <p>{name}</p>
                <p>{date}</p>
                <p>{platforms}</p>
                <p>{genres}</p>
            </div>
        </section>
    );
}
