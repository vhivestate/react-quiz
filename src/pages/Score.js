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
      <h1 className='flex flex-wrap text-5xl text-center'>Score: {score}</h1>
      <button className='btn glass' onClick={incrementScore}>Increase Score</button>
      <button className='btn glass' onClick={decrementScore}>Decrease Score</button>
    </div>
  );
}

export default ScoreKeeper;
