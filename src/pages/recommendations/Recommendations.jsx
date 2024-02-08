import React, {useEffect, useState} from 'react';
import './Recommendations.css'
import {Dropdown} from "../../components/dropdown/Dropdown.jsx";

export function Recommendations() {
    const [selectedValues, setSelectedValues] = useState({
        'genre-dropdown': '',
        'platform-dropdown': '',
    })
    const genreOptions =
           ["--Genre--",
            "Racing",
            "Shooter",
            "Adventure",
            "Action",
            "RPG",
            "Fighting",
            "Puzzle",
            "Strategy",
            "Arcade",
            "Simulation",
            "Sports",
            "Card",
            "Family",
            "Board Games",
            "Educational",
            "Casual",
            "Indie",
            "Massively Multiplayer",
            "Platformer"]

    const platformOptions = ['--Platform--', 'Xbox One', 'iOS', 'PC', 'macOS', 'Linux', 'Nintendo Switch', 'Nintendo 3DS', 'Nintendo DS', 'Wii U', 'Wii', 'Neo Geo', 'Nintendo DSi', 'Xbox 360', 'PlayStation 2', 'PlayStation 3', 'PSP', 'PlayStation 4', 'PS Vita', 'Android', 'Atari Flashback', 'Atari 2600', 'Game Boy Advance', 'Atari 8-bit', 'Game Boy', 'PlayStation', 'Atari 7800', 'Atari 5200', 'Atari ST', 'Apple II', 'Game Boy Color', 'Atari Lynx', 'NES', 'Atari XEGS', 'Classic Macintosh', 'SEGA Master System', 'Game Gear', 'SNES', 'Xbox', 'Nintendo 64', 'GameCube']

    const handleSelect=(name, value)=> {
        setSelectedValues({
            ...selectedValues,
            [name]: value
        })
    }
    return (
        <div className="selectLists">
            <div className="genreSelect-dropdown">
                <Dropdown
                    name="genre-dropdown"
                    labelText="Genre"
                    optionsArray={genreOptions}
                    selectedValue={selectedValues['genre-dropdown']}
                    setSelectedValue={handleSelect}
                />

                <Dropdown
                    name="platform-dropdown"
                    labelText="Platform"
                    optionsArray={platformOptions}
                    selectedValue={selectedValues['platform-dropdown']}
                    setSelectedValue={handleSelect}
                />


                <p>Selected Genre: {selectedValues['genre-dropdown']}</p>
                <p>Selected Platform: {selectedValues['platform-dropdown']}</p>
            </div>
        </div>
    );
}

