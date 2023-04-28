import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(120);
  const [timesUp, setTimesUp] = useState(false);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setTimesUp(true);
      setShowScore(true);
    }
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div>
      {timesUp ? (
        <div>
          <h1>Times up!</h1>
          {showScore && <ScorePage />}
        </div>
      ) : (
        <h1>{`${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`}</h1>
      )}
    </div>
  );
}

function ScorePage() {
  // logic to calculate and display the score
  return (
    <div>
      <h2>Your score is:</h2>
      {/* display the score */}
    </div>
  );
}

export default Timer;
