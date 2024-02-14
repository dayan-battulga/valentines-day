import React, { useEffect } from "react";
import spikeImage from './img/spike.png';
import './LoadingScreen.css';

export function LoadingScreen() {
    useEffect(() => {
        // Function to create a random number between min and max
        const getRandomNumber = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        // Number of hearts you want to create
        const numHearts = 30;

        // Get the loading body element
        const loadingBody = document.querySelector('.loading-body');

        // Create hearts dynamically
        for (let i = 0; i < numHearts; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.top = `${getRandomNumber(0, 100)}vh`; // Random vertical position
            heart.style.left = `${getRandomNumber(0, 100)}vw`; // Random horizontal position
            loadingBody.appendChild(heart);
        }
    }, []); // Run only once on component mount

    return (
        <div className="loading-body">
            <div className="loading-icon">
                <img src={spikeImage} alt="spike-face" className="spike-animation"/>
            </div>
        </div>
    );
}
