import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Score from './pages/Score';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Timer from './components/Timer';

function App() {
  return (
    <Router>
      <Nav/>
      <Timer/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="quiz" element={<Quiz/>}/>
        <Route path="score" element={<Score/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
