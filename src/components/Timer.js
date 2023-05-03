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
  const [score, setScore] = useState(0);

  const incrementScore = () => {
    setScore(score + 1);
  };

  const decrementScore = () => {
    setScore(score - 1);
  };
  return (
    <div>
          <h1 className='flex flex-wrap text-5xl text-center justify-center'>Score: {score}</h1>

      <h2>Your score is:
      </h2>
      {/* display the score */}

      
      <div id='quizSection'>
      <div className='flex justify-center pt-5'>
        <div className="w-64 carousel rounded-box">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title"> 1. True or False:</h2>
                        <p>Any Boolean expression can be represented by a truth table</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"  onClick={incrementScore}>True</button>
                            <button className="btn btn-ghost" onClick={decrementScore}>False</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 

            <div id="slide2" className="carousel-item relative w-full">
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">2. True or False:</h2>
                        <p>In hardware, the next step up from the transistor was the transmitter.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary" onClick={decrementScore}>True</button>
                            <button className="btn btn-ghost" onClick={incrementScore}>False</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 

            <div id="slide3" className="carousel-item relative w-full">
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Question 3</h2>
                        <p>We are using cookies for no reason.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">True</button>
                            <button className="btn btn-ghost">False</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 

            <div id="slide4" className="carousel-item relative w-full">
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Question 4</h2>
                        <p>We are using cookies for no reason.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">True</button>
                            <button className="btn btn-ghost">False</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div> 

            <div id="slide5" className="carousel-item relative w-full">
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Question 5</h2>
                        <p>We are using cookies for no reason.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">True</button>
                            <button className="btn btn-ghost">False</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                </div>
            </div> 
        </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
