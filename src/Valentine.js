import React from "react";
import cherryWine from './audio/cherry-wine.wav';
import finalImage from './img/valentines.png';
import './Valentine.css';

export function Valentine() {
    return (
        <div className="final-page">
            <img src={finalImage} alt="final-page" className="final-page-img"/>
            <audio src={cherryWine} autoPlay loop/>
        </div>
    )
}