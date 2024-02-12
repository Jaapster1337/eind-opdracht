import React from 'react';
import './GameDisplay.css'
import userImage from "../../assets/generic-user-image.png";

export function GameDisplay({index, img, name, devs, date, platform, genres}) {
    return (
        <section id={index} className="game-card">
            <div className="game-image-container">
            <img src={img} className="game-image" alt="art of the game"/>
            </div>
            <div className="text-wrapper">
                <p>{name}</p>
                <p>{date}</p>
                <p>{platform}</p>
                <p>{genres}</p>
            </div>
        </section>
    );
}
