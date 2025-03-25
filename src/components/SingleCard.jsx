import React from "react";
import styled from "styled-components";

const SingleCard = ({ card, handleClick, isFlipped }) => {
  return (
    <Wrapper onClick={() => handleClick(card)}>
      <div className={`card ${isFlipped ? "flipped" : ""}`}>
        <div className="card-front">?</div>
        <div className="card-back">{String.fromCodePoint(parseInt(card.emoji.replace("&#", ""), 10))}</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  perspective: 1000px;
  cursor: pointer;

  .card {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.5s ease-in-out;
    background: white;
    box-shadow: 2px 2px 10px rgba(255, 255, 255, 0.2);
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    border-radius: 10px;
    font-weight: bold;
  }

  .card-front {
    background: lightgray;
    color: black;
  }

  .card-back {
    background: orange;
    transform: rotateY(180deg);
    color: white;
  }

  .flipped {
    transform: rotateY(180deg);
  }
`;

export default SingleCard;
