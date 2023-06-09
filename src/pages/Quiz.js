import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';

const Quiz = () => {
    useEffect(() => {
        const interval = setInterval(() => {
          console.log('This will run every second!');
        }, 1000);
        return () => clearInterval(interval);
      }, []);

  return (
    <div>
        <div className='flex justify-center'>
            <div className=''>
                <span className="countdown font-mono text-4xl">
                <span style={{"--value":2}}></span>
                </span>
                min
            </div> 
            <div>
                <span className="countdown font-mono text-4xl">
                <span style={{"--value":0}}></span>
                </span>
                sec
            </div>
        </div>

        <div className='flex justify-center pt-5'>
        <div className="w-64 carousel rounded-box">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Question 1</h2>
                        <p>We are using cookies for no reason.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">True</button>
                            <button className="btn btn-ghost">False</button>
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
                        <h2 className="card-title">Question 2</h2>
                        <p>We are using cookies for no reason.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">True</button>
                            <button className="btn btn-ghost">False</button>
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

        <div className='flex justify-center pt-5'>
            <button className="btn btn-primary"><Link to={'/score'}>Submit Quiz</Link></button>
        </div>
    </div>
  )
}

export default Quiz

