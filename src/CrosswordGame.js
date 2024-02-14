import React, {useRef} from "react";
import {
    CrosswordProvider,
    CrosswordGrid,
    DirectionClues,
    ThemeProvider
  } from '@jaredreisinger/react-crossword';
import './CrosswordGame.css';
import {useState, useEffect} from 'react';
import {Valentine} from './Valentine';


export function CrosswordGame() {

    //15 x 4 grid
    const data = {
        across: {
            3: {
              clue: 'Dayans favourite thing to do',
              answer: 'CUDDLE',
              row: 1,
              col: 0,
            },
            5: {
                clue: 'Oyundari fav animal (old verson)',
                answer: 'DOG',
                row: 2,
                col: 6,
            },
            6: {
                clue: 'Pajama-brand',
                answer: 'MUJI',
                row: 2,
                col: 10,
            },
            7: {
                clue: 'Oyundaris fav binge-eating food',
                answer: 'SAMAR',
                row: 3,
                col: 0,
              },
            9: {
                clue: 'OG webtoon (acronym)',
                answer: 'TFNWTD',
                row: 4,
                col: 6,
            },
            11: {
              clue: 'Fav webtoon',
              answer: 'TRUELOVE',
              row: 6,
              col: 0,
            },
            12: {
                clue: 'Phrase Oyundari got sick of',
                answer: 'OHDAMN',
                row: 6,
                col: 9,
            },
            13: {
                clue: 'Oyundaris get-out-of-jail card',
                answer: 'IMSAD',
                row: 8,
                col: 2,
            },
            16: {
                clue: 'Word we need to change how we say',
                answer: 'PP',
                row: 8,
                col: 8,
            },
            17: {
                clue: 'GOAT clothing store',
                answer: 'UNIQLO',
                row: 11,
                col: 0,
            },
            19: {
                clue: 'Oyundaris fav snack (2024 version)',
                answer: 'POPCORNERS',
                row: 13,
                col: 4,
            }
        },
        down: {
            1: {
                clue: '2022 anniversary activity',
                answer: 'ICESKATING',
                row: 0,
                col: 0,
            },
            2: {
                clue: 'Oyundaris fav color',
                answer: 'BEIGE',
                row: 0,
                col: 13,
            },
            4: {
                clue: 'Dayans daily must-have',
                answer: 'COFFEE',
                row: 1,
                col: 7,
            },
            6: {
                clue: 'Oyundaris fav drink flavor',
                answer: 'MATCHA',
                row: 2,
                col: 10,
            },
            8: {
                clue: 'JJK crush',
                answer: 'MEGUMI',
                row: 3,
                col: 2,
            },
            10: {
                clue: 'What motivates us ',
                answer: 'EACHOTHER',
                row: 5,
                col: 12,
            },
            14: {
                clue: 'Oyundaris fav animal (2024 version)',
                answer: 'SEAL',
                row: 8,
                col: 4,
            },
            15: {
                clue: 'Dayans fav restaurant (acronym)',
                answer: 'DTF',
                row: 8,
                col: 6,
            },
            16: {
                clue: 'Oyundaris fav snack (old version)',
                answer: 'PEPERO',
                row: 8,
                col: 8,
            },
            18: {
                clue: 'Our dream city',
                answer: 'NYC',
                row: 11,
                col: 1,
            }

        },
    }

    const crosswordRef = useRef(); 
    const [isCrosswordComplete, setIsCrosswordComplete] = useState(false);
    const [loadValentine, setLoadValentine] = useState(false);

    const correctAnswer = () => {
        console.log("Correct Answer!")
        if (crosswordRef.current.isCrosswordCorrect()) {
            alert("Congrats! You've completed the crossword puzzle.");
        }
    }

    const resetButton = () => {
        crosswordRef.current.reset();
    }

    const checkButton = () => {
        if (crosswordRef.current.isCrosswordCorrect()) {
            setIsCrosswordComplete(true);
        }
    }

    useEffect(() => {
        if (isCrosswordComplete) {
          setTimeout(() => {
            setLoadValentine(true);
          }, 4000);
        }
    }, [isCrosswordComplete]);

    const fillButton = () => {
        crosswordRef.current.fillAllAnswers();
    }

    return (
        <div style={{ height: '100vh', width: '100vw' }}>
            {loadValentine ? (
                <div >
                    <Valentine/>
                </div>
            ) : (
            <div className={`crossword-container ${isCrosswordComplete ? 'fade-out' : ''}`}>
            <div className="crossword-title">
                Our Crossword :D
            </div>
            <div className="crossword-game">
                <ThemeProvider
                    theme={{
                        allowNonSquare: false,
                        columnBreakpoint: '9999px',
                        gridBackground: 'transparent',
                        cellBackground: 'white',
                        cellBorder: 'black',
                        textColor: 'black',
                        numberColor: 'black',
                        focusBackground: '#ffda00',
                        highlightBackground: '#a7d8ff',
                    }}
                >
                    <CrosswordProvider data={data} onCorrect={correctAnswer} ref={crosswordRef}>
                        <div className="crossword-grid-container">
                            <CrosswordGrid />
                        </div>
                        <div className="crossword-clues-container">
                            <DirectionClues direction="across" />
                            <DirectionClues direction="down" />
                        </div>
                    </CrosswordProvider>
                </ThemeProvider>
                <div className="crossword-buttons">
                    <button onClick={checkButton} className="check-button ">Check</button>
                    <button onClick={resetButton} className="reset-button">Reset</button>
                    <button onClick={fillButton} className="fill-button">Fill</button>
                </div>
            </div>
        </div>
        )
        }
        </div>
    )
}