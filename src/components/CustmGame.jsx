import React, { useState } from "react";
import styled from "styled-components";
import { useCardContext } from "../context/cardsEmoji";
import SingleCard from "./SingleCard";

const CustmGame = () => {
  const { emoji } = useCardContext();
  const [startGame, setStartGame] = useState(false);
  const [numberOfCards, setNumberOfCards] = useState(0);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  // Shuffle Function
  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  // Grid Configuration Based on Number of Cards
  const getGridConfig = (num) => {
    if (num === 10) return "repeat(2, 1fr) / repeat(5, 1fr)";
    if (num === 20) return "repeat(4, 1fr) / repeat(5, 1fr)";
    if (num === 30) return "repeat(3, 1fr) / repeat(10, 1fr)";
    if (num === 40) return "repeat(4, 1fr) / repeat(10, 1fr)";
    return "repeat(5, 1fr) / repeat(2, 1fr)"; // Default
  };

  // Function to Start the Game
  const startNewGame = () => {
    const uniqueEmojis = shuffleArray([...emoji]).slice(0, numberOfCards / 2);
    const pairedCards = shuffleArray(
      uniqueEmojis.flatMap((e) => [
        { emoji: e, id: Math.random() },
        { emoji: e, id: Math.random() },
      ])
    );

    setCards(pairedCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setStartGame(true);
  };

  // Handle card click
  const handleCardClick = (clickedCard) => {
    if (matchedCards.includes(clickedCard) || flippedCards.includes(clickedCard)) return;

    if (flippedCards.length === 2) {
      setFlippedCards([clickedCard]);
      return;
    }

    const newFlipped = [...flippedCards, clickedCard];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setTimeout(() => {
        if (newFlipped[0].emoji === newFlipped[1].emoji) {
          setMatchedCards((prev) => [...prev, ...newFlipped]);
        }
        setFlippedCards([]);
      }, 1000);
    }
  };

  return (
    <Wrapper gridConfig={getGridConfig(numberOfCards)}>
      {startGame ? (
        <>
          <div className="game-board">
            {cards.map((card) => (
              <SingleCard
                key={card.id}
                card={card}
                handleClick={handleCardClick}
                isFlipped={flippedCards.includes(card) || matchedCards.includes(card)}
              />
            ))}
          </div>

          {/* Popup when all cards are matched */}
          {matchedCards.length === numberOfCards && (
            <div className="popup">
              <h2>🎉 Congratulations! 🎉</h2>
              <p>You completed the game!</p>
              <button onClick={() => setStartGame(false)}>Play Again</button>
            </div>
          )}
        </>
      ) : (
        <div className="setup">
          <h2>Memory Card Game</h2>
          <label>Select Number of Cards: </label>
          <select onChange={(e) => setNumberOfCards(Number(e.target.value))}>
            <option value="0"></option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
          </select>
          <button onClick={startNewGame}>Start Game</button>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #121212;
  color: white;
  
  .setup {
    text-align: center;
    background: #1e1e1e;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.1);
    display:flex;
    flex-direction:column;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 15px;
  }

  select, button {
    font-size: 18px;
    padding: 10px;
    margin-top: 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  button {
    background: orange;
    border: none;
    color: white;
    font-weight: bold;
    transition: 0.3s;
  }

  button:hover {
    background: darkorange;
  }

  .game-board {
    display: grid;
    grid-template: ${({ gridConfig }) => gridConfig};
    gap: 10px;
    padding: 20px;
    max-width: 80vw;
    max-height: 80vh;
  }

  /* Popup styling */
  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    color: black;
    padding: 20px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }

  .popup button {
    background: orange;
    border: none;
    padding: 10px;
    margin-top: 10px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
    font-weight: bold;
  }

  .popup button:hover {
    background: darkorange;
  }
`;

export default CustmGame;
