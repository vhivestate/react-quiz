import React, { useState } from 'react';

function ScoreKeeper() {
  const [score, setScore] = useState(0);

  const incrementScore = () => {
    setScore(score + 1);
  };

  const decrementScore = () => {
    setScore(score - 1);
  };

  return (
    <div>
      <h1>Score: {score}</h1>
      <button onClick={incrementScore}>Increase Score</button>
      <button onClick={decrementScore}>Decrease Score</button>
    </div>
  );
}

export default ScoreKeeper;
