import React, { useState, useEffect } from "react";
import "./Homepage.css";

export function Homepage({ onYesButtonClick }) {
    const [yesButtonSize, setYesButtonSize] = useState({ width: 400, height: 250 });
    const [noButtonSize, setNoButtonSize] = useState({ width: 400, height: 250 });
    const [yesFontSize, setYesFontSize] = useState(40);
    const [noFontSize, setNoFontSize] = useState(40);
    const [clicks, increaseClick] = useState(0);
    const [yesButtonText, setYesButtonText] = useState("Yes");


    useEffect(() => {
        // Get the initial yes button size from CSS
        const yesButtonStyles = window.getComputedStyle(document.querySelector('.no'));
        const yesInitialWidth = parseInt(yesButtonStyles.getPropertyValue('width'));
        const yesInitialHeight = parseInt(yesButtonStyles.getPropertyValue('height'));

        //Get initial button size for no button
        const noButtonStyles = window.getComputedStyle(document.querySelector('.yes'));
        const noInitialWidth = parseInt(noButtonStyles.getPropertyValue('width'));
        const noInitialHeight = parseInt(noButtonStyles.getPropertyValue('height'));

        // Set the initial button size state
        setYesButtonSize({ width: yesInitialWidth, height: yesInitialHeight });
        setNoButtonSize({ width: noInitialWidth, height: noInitialHeight });
    }, []); 
    const [characters, setCharacters] = useState([]);
    const increaseButtonSize = () => {


        setYesButtonSize({
            width: yesButtonSize.width * 1.2,
            height: yesButtonSize.height * 1.2,
        });
        
        setNoButtonSize({
            width: noButtonSize.width * 0.8,
            height: noButtonSize.height * 0.8,
        })
        
        if (yesFontSize < 120) {
            setYesFontSize(yesFontSize * 1.2);
        }

        setNoFontSize(noFontSize * 0.9);

        increaseClick(clicks + 1);

        // Update button text
        const yesButtonTexts = ["Yes", "What de heck?", "You pressed no?", ">:(", ":(", "am sad now", "why de heck", "i thought you loved me :(", "PLEASE I LOVE YOU OYUNDARICHAN!", "im more sad now", "...", "sad dayan times", "hmph", "im never forgiving dis", "YOU are playing these games", "pusheen mad at u", "im mad at you", "what", "de", "frick", "peepee", "poopoo", "you know what", "now you can't press no >:D hehe you HAVE to be my valentine MWAHAHA"]; //23 item is the final text
        setYesButtonText(yesButtonTexts[(clicks + 1) % yesButtonTexts.length]);

        setCharacters(prevCharacters => [
            ...prevCharacters,
            {
                id: prevCharacters.length, // unique id for each character
                top: Math.random() * 100, // random position (0 to 300)
                left: Math.random() * 100, // random position (0 to 300)
                fontSize: Math.random() * 50 + 10, // random font size (10 to 50)
            },
        ]);
    };

    return (
        <div className="container">
            <div className="question-box">
                Will you be my valentine?
            </div>
            <div className="box">
                {clicks >= 23 ? (
                    <div className="yesBox">
                        <button className="yesFullScreen"
                            style={{
                            height: 125 + "vh", 
                            width: 100 + "vw",
                            backgroundColor: '#90EE90',
                            color: '#74A12E',
                            fontSize: 4 + 'em'
                        }}
                            onClick={onYesButtonClick}
                        >
                            {yesButtonText}
                        </button>
                    </div>
                ) : (
                    <div className="button-box">
                        <button 
                            className="yes"
                            style={{ width: `${yesButtonSize.width}px`, height: `${yesButtonSize.height}px`, fontSize: `${yesFontSize}px` }}
                            onClick={onYesButtonClick}
                        >
                        {yesButtonText}
                        </button>
                        <button 
                            className="no"
                            style={{ width: `${noButtonSize.width}px`, height: `${noButtonSize.height}px`, fontSize: `${noFontSize}px`}}
                            onClick={increaseButtonSize}
                        >
                            No
                        </button>
                    </div>
                )}
            </div>
            {characters.map(character => (
                <div
                    key={character.id}
                    style={{
                    position: 'absolute',
                    top: `${character.top}%`,
                    left: `${character.left}%`,
                    fontSize: `${character.fontSize}px`,
                }}>
                    {'>'}:(
                </div>
    ))}
        </div>
    )
}
